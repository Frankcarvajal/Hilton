import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import get from 'lodash/get'
import { navigate, Link } from '@reach/router'

import { logout } from '../../store/session'
import { Avatar, Badge } from '../../components'

const AppHeader = ({ session, logout, feedbackCount, requestCount }) => {
  const firstName = get(session, 'user.firstName')
  const lastName = get(session, 'user.lastName')

  return (
    <AppHeader.Styled className='app-header-component'>
      <Link to='/share-feedback'>
        <h1 className='app-header-name'>Hilton Hotel & Resorts</h1>
      </Link>

      <div className='nav-wrapper'>
        <nav className='app-header-nav'>
          <Link to='/share-feedback' getProps={({ isCurrent }) => isActiveLink(isCurrent)}>
            Share Feedback
            {requestCount && <Badge className='app-header-badge'>{requestCount}</Badge>}
          </Link>
          <Link to='/hotel-reviews' getProps={({ isCurrent }) => isActiveLink(isCurrent)}>
            Hotel Reviews
          </Link>
          <Link to='/hotel-details' getProps={({ isCurrent }) => isActiveLink(isCurrent)}>
            Hotel Details
          </Link>
          <Link to='/dynamic-form' getProps={({ isCurrent }) => isActiveLink(isCurrent)}>
            Form
          </Link>
          <Link to='/components' getProps={({ isCurrent }) => isActiveLink(isCurrent)}>
            Components
          </Link>
        </nav>
      </div>

      <div className='app-header-user-block'>
        <Avatar name={`${firstName} ${lastName}`} />

        <div className='name-logout'>
          <span>{firstName} {lastName}</span>
          <a onClick={() => {
            logout()
            navigate('/login')
          }} getProps={({ isCurrent }) => isActiveLink(isCurrent)}>Logout</a>
        </div>

      </div>
    </AppHeader.Styled>
  )
}

function isActiveLink (isCurrent) {
  return {
    className: isCurrent ? 'active' : ''
  }
}

AppHeader.propTypes = {
  logout: PropTypes.func,
  feedbackCount: PropTypes.number,
  requestCount: PropTypes.number,
  session: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string
    })
  })
}

AppHeader.Styled = styled.header`
  &.app-header-component {
    align-items: center;
    background-color: ${({ theme }) => (theme.colors.background.light)};
    border: 1px solid ${({ theme }) => (theme.colors.borderColor)};
    display: flex;
    flex-direction: row;
    height: 75px;
    margin-bottom: 50px;
    padding-left: 100px;
    padding-right: 20px;
    width: 100%;

    .app-header-name {
      color: ${({ theme }) => (theme.colors.darkest)};
      margin: 0;
    }

    .nav-wrapper {
      flex-grow: 1;
      display: flex;
      justify-content: center;
    }

    .app-header-nav {
      display: flex;
      width: 800px;
      justify-content: center;
      padding-left: 50px;

      > a {
        border-bottom: 3px solid ${({ theme }) => (theme.colors.background.light)};
        color: ${({ theme }) => (theme.colors.text)};
        height: 74px;
        line-height: 74px;
        margin-bottom: 1px;
        margin-right: 50px;
        position: relative;

        .app-header-badge {
          position: absolute;
          top: 15px;
          right: -20px;
        }

        &.active {
          border-color: ${({ theme }) => (theme.colors.brand1)};
        }
      }
    }

    .app-header-user-block {
      border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
      display: flex;
      align-items: center;
      width: 215px;
      justify-content: space-around;
      padding-right: 25px;
      height: 100%;

      .name-logout {
        display: flex;
        flex-direction: column;


        > a {
          font-weight: bold;
          text-transform: uppercase;
          font-size: 12px
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  session: state.session,
  feedbackCount: state.feedback.length,
  requestCount: state.requests.reduce((current, next) => {
    return (!next.dateCompleted)
      ? current + 1
      : current
  }, 0)
})
const mapDispatchToProps = dispatch => (bindActionCreators({
  logout
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
