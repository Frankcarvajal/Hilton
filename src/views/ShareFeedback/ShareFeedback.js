import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { navigate } from '@reach/router'

import { loadSurvey } from '../../store/surveyMap'
import { sortByObjKey } from '../../utils/sortUtils'
import { Avatar, Button, Card, HotelList } from '../../components'

class ShareFeedback extends Component {
  static propTypes = {
    loadSurvey: PropTypes.func,
    requests: PropTypes.arrayOf(PropTypes.shape({
      dateRequested: PropTypes.data,
      dateCompleted: PropTypes.date,
      hotels: PropTypes.arrayOf(PropTypes.shape({
        prefixName: PropTypes.string,
        id: PropTypes.string,
        hotelName: PropTypes.string
      }))
    }))
  }

  handleViewSubmission = (requestId) => () => {
    navigate(`/view-survey/${requestId}`)
  }

  handleFillOutSurvey = (requestId) => () => {
    const { loadSurvey } = this.props
    loadSurvey(requestId)
    navigate(`/survey/${requestId}`)
  }

  render () {
    const { requests } = this.props

    return (
      <ShareFeedback.Styled className='sharefeedback-view-component'>
        <h1>Share Feedback from Prior Bookings</h1>

        <Card>
          <HotelList>
            {requests && requests
              .sort(sortByObjKey('dateCompleted'))
              .map(({ id, hotel, dateRequested, dateCompleted }) => (
                <li key={id}>
                  <Avatar name={`${hotel.prefixName} ${hotel.hotelName}`} />
                  <span className='hotel-name'>{hotel.prefixName} {hotel.hotelName}</span>
                  {dateCompleted
                    ? <Button color='default' onClick={this.handleViewSubmission(id)}>View Submission</Button>
                    : <Button color='primary' onClick={this.handleFillOutSurvey(id)}>Fill Out</Button>
                  }
                </li>
              ))}
          </HotelList>
        </Card>
      </ShareFeedback.Styled>
    )
  }
}

ShareFeedback.Styled = styled.div`
  width: 780px;

  li {
    display: flex;

    .hotel-name {
      color: ${({ theme }) => theme.colors.text.medium}
      margin-left: 20px;
      flex-grow: 1;
      font-size: 22px;
    }
  }
`

const mapStateToProps = state => ({
  requests: state.requests
})
const mapDispatchToProps = dispatch => (bindActionCreators({
  loadSurvey
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(ShareFeedback)
