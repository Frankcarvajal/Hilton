import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import get from 'lodash/get'
import classnames from 'classnames'

import { sortByObjKey } from '../../utils/sortUtils'
import {
  Avatar,
  Button,
  Card,
  Details,
  HotelList
} from '../../components'

class HotelDetails extends Component {
  static propTypes = {
    feedback: PropTypes.arrayOf(PropTypes.shape({
      dateCompleted: PropTypes.date,
      from: PropTypes.shape({
        prefixName: PropTypes.string,
        id: PropTypes.string,
        hotelName: PropTypes.string
      }),
      id: PropTypes.string,
      details: PropTypes.arrayOf(PropTypes.shape({
        answer: PropTypes.any,
        id: PropTypes.string,
        question: PropTypes.string,
        type: PropTypes.string
      }))
    }))
  }

  state = {}

  handleUserClick = (feedbackId) => () => {
    this.setState({
      activeHotelId: feedbackId
    })
  }

  render () {
    const { feedback } = this.props
    const { activeHotelId } = this.state
    const activeFeedback = activeHotelId && feedback.find((feedback) => feedback.id === activeHotelId)

    return (
      <HotelDetails.Styled className='myfeedback-view-component'>
        <header className='feedback-header'>
          <h1>Hotel Details</h1>
          <Button color='primary'>Print Details</Button>
        </header>

        <Card className='feedback-wrapper'>
          <HotelList className='my-feedback-hotels'>
            <li>Review Specific Details</li>
            {feedback && feedback
              .sort(sortByObjKey('dateCompleted'))
              .map(({ id, dateCompleted, from, details }) => (
                <li key={id} onClick={this.handleUserClick(id)} className={classnames({ active: activeHotelId === id })}>
                  <Avatar name={`${from.prefixName} ${from.hotelName}`} />
                  <span className='user-name'>{from.prefixName} {from.hotelName}</span>
                </li>
              ))}
          </HotelList>

          <Details
            key={activeHotelId}
            address={activeFeedback && activeFeedback.from.address}
            number={activeFeedback && activeFeedback.from.number}
            className='my-feedback-user-feedback'
            userName={activeFeedback && `${get(activeFeedback, 'from.prefixName')} ${get(activeFeedback, 'from.hotelName')}`}
            img={activeFeedback && activeFeedback.from.img}
            details={activeFeedback && activeFeedback.details}
          />
        </Card>
      </HotelDetails.Styled>
    )
  }
}

HotelDetails.Styled = styled.div`
  width: 1180px;

  .feedback-header {
    display: flex;
    flex-direction: row;

    h1 {
      flex: 1;
    }
  }

  .feedback-wrapper {
    display: flex;
    flex-direction: row;
  }

  .my-feedback-hotels.user-list-component {
    min-width: 380px;
    max-width: 380px;

    li {
      .user-name {
        margin-left: 20px;
      }

      &:first-child {
        color: ${({ theme }) => theme.colors.text.medium}
        font-size: 12px;
        font-weight: bold;
        height: 30px;
        text-transform: uppercase;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  .my-feedback-user-feedback.list-component {
    border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
`

const mapStateToProps = state => ({
  feedback: state.feedback
})
const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails)
