import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AppHeader } from '../../components'

export default class Home extends PureComponent {
  componentWillMount () {
    let body = document.querySelector('body')
    body.classList.add('hide-background')
  }

  componentWillUnmount () {
    let body = document.querySelector('body')
    body.classList.remove('hide-background')
  }

  render () {
    return (
      <Home.Styled>
        <AppHeader />
        <div className='home-content'>
          {this.props.children}
        </div>
      </Home.Styled>
    )
  }
}

// TODO: EWWWW
Home.Styled = styled.div`
  background-color: white;
  height: 100%;

  .home-content > div > div {
    margin-left: auto;
    margin-right: auto;
  }
`

Home.propTypes = {
  children: PropTypes.node
}
