import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import get from 'lodash/get'

import { Card, Results } from '../../components'

const ViewSurvey = ({ completedMap, requestId }) => {
  const activeSurvey = completedMap[requestId]
  console.log('activeSurvey', activeSurvey)

  return activeSurvey
    ? (
      <ViewSurvey.Styled>
        <Results
          key={activeSurvey.id}
          className='my-feedback-user-feedback'
          userName={activeSurvey && `${get(activeSurvey, 'for.firstName')} ${get(activeSurvey, 'for.lastName')}`}
          results={activeSurvey && activeSurvey.results}
        />
      </ViewSurvey.Styled>
    )
    : <div>Hmmmmm....</div>
}

ViewSurvey.propTypes = {
  requestId: PropTypes.string.isRequired,
  completedMap: PropTypes.object
}

ViewSurvey.Styled = styled(Card)`
  width: 780px;
`

const mapStateToProps = state => ({
  completedMap: state.completedMap
})
const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(ViewSurvey)
