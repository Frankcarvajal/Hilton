import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import get from 'lodash/get'
import { navigate } from '@reach/router'
import classnames from 'classnames'

import { Avatar, Button, Card, ProgressScale } from '../../components'
import { updateSurvey } from '../../store/surveyMap'
import { fulfillRequest } from '../../store/requests'
import { completeFeedback } from '../../store/completedMap'

class Survey extends Component {
  constructor (props) {
    super(props)

    const { surveyMap, requestId, questions } = this.props
    const savedSurvey = surveyMap[requestId]

    this.state = {
      questionNumber: 0,
      form: savedSurvey
        ? { ...savedSurvey }
        : questions.reduce((current, next) => ({
          ...current,
          [next.id]: null
        }), {})
    }
  }

  handlePrevious = () => {
    this.setState((currentState) => ({
      questionNumber: currentState.questionNumber === 0
        ? 0
        : currentState.questionNumber - 1
    }))
  }

  handleNext = () => {
    this.setState((currentState, currentProps) => ({
      questionNumber: currentState.questionNumber === currentProps.questions.length - 1
        ? currentProps.questions.length - 1
        : currentState.questionNumber + 1
    }), () => {
      this.saveSurveyProgress()
    })
  }

  saveSurveyProgress () {
    const { requestId, updateSurvey } = this.props
    const { form } = this.state

    updateSurvey(requestId, form)
  }

  handleSubmit = async () => {
    const { fulfillRequest, requestId, completeFeedback } = this.props
    await this.saveSurveyProgress()
    await completeFeedback(requestId)
    await fulfillRequest(requestId)
    navigate(`/share-feedback`)
  }

  handleScaleChange = (question) => (value) => {
    this.updateFormState(question.id, { value })
  }

  handleTextChange = (question) => (se) => {
    this.updateFormState(question.id, { value: se.target.value })
  }

  handleMultipleChoiceClick = (question, value, id, label) => () => {
    this.updateFormState(question.id, { value, id, label })
  }

  updateFormState (id, value) {
    this.setState((currentState) => ({
      form: {
        ...currentState.form,
        [id]: value
      }
    }))
  }

  handleExitSurvey = () => {
    this.saveSurveyProgress()
    navigate(`/share-feedback`)
  }

  render () {
    const { questions, requestId, requests } = this.props
    const { questionNumber } = this.state
    const request = requests.find((request) => request.id === requestId)
    const activeQuestion = questions[questionNumber]

    const prefixName = get(request, 'hotel.prefixName')
    const hotelName = get(request, 'hotel.hotelName')

    return (
      <Survey.Styled>
        <div style={{ marginBottom: 10 }}>
          <a style={{ fontSize: 12, color: '#59636E' }} onClick={this.handleExitSurvey}>&lt; EXIT</a>
        </div>
        <header className='survey-header'>
          <div className='question-text'>
            <h2>{activeQuestion.questionValue}</h2>
            <h3>Share your feedback for {prefixName} {hotelName}</h3>
          </div>

          <div className='spacer' />

          <Avatar name={`${prefixName} ${hotelName}`} />
        </header>

        <Card className='survery-card'>
          <div className='survey-answers'>
            {this.renderQuestion(activeQuestion)}
          </div>

          <div className='survey-controls'>
            <Button onClick={this.handlePrevious}>Previous</Button>
            {/* <Button>Skip</Button> */}
            {questionNumber < questions.length - 1
              ? <Button onClick={this.handleNext}>Next</Button>
              : <Button color='primary' onClick={this.handleSubmit}>Submit Feedback</Button>
            }
          </div>

          <div className='surver-footer'>
            <ProgressScale
              className='survey-progress'
              gutterWidth={0}
              key={questionNumber}
              max={questions.length}
              readOnly
              value={questionNumber + 1}
            />
            <div className='survey-question-progress'>
              Question Progress
            </div>
            <div className='survey-question-progress-count'>
              {questionNumber + 1}/{questions.length}
            </div>
          </div>
        </Card>
      </Survey.Styled>
    )
  }

  renderQuestion (question) {
    const { form } = this.state

    switch (question.type) {
      case 'text':
        return (
          <textarea
            placeholder='Say something'
            onChange={this.handleTextChange(question)}
            value={get(form, `[${question.id}].value`)}
          />
        )
      case 'scale':
        return (
          <ProgressScale
            className='survey-scale-answer'
            color='#AB61E5'
            gutterWidth={2}
            max={10}
            onClick={this.handleScaleChange(question)}
            value={get(form, `[${question.id}].value`)}
          />
        )
      case 'multipleChoice':
        return (
          <div className='multichoice'>
            {question.options.map(({ id, value, label }) => (
              <a
                key={id}
                className={classnames('multichoice-option', {
                  selected: get(form, `[${question.id}].value`) === value
                })}
                onClick={this.handleMultipleChoiceClick(question, value, id, label)}
              >{label}</a>
            ))}
          </div>
        )
    }
  }
}

Survey.propTypes = {
  fulfillRequest: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  requestId: PropTypes.string.isRequired,
  requests: PropTypes.array,
  surveyMap: PropTypes.object,
  updateSurvey: PropTypes.func.isRequired
}

Survey.defaultProps = {
  surveyMap: {}
}

Survey.Styled = styled.div`
  width: 780px;

  .survey-header {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    .question-text {
      width: 85%;

      > h2 {
        font-size: 31px;
        font-weight: lighter;
        margin-bottom: 20px;
      }

      > h3 {
        color: ${({ theme }) => theme.colors.text.light};
        font-size: 12px;
        text-transform: uppercase;
      }
    }

    .spacer {
      flex-grow: 1;
    }
  }

  .survery-card {
    display: flex;
    flex-direction: column;
    height: 440px;
    max-height: 440px;
    padding: 20px;

    .survey-answers {
      flex-grow: 1;
      margin-bottom: 20px;

      .multichoice {
        display: flex;
        flex-direction: column;

        .multichoice-option {
          background-color: ${({ theme }) => theme.colors.background.light};
          border-radius: 4px;
          color: ${({ theme }) => theme.colors.text.dark};
          cursor: pointer;
          margin-bottom: 10px;
          padding: 20px 30px;
          transition: background-color 0.3s ease;

          &.selected {
            color: ${({ theme }) => theme.colors.lightest};
            background-color: ${({ theme }) => theme.colors.darkGrey};
          }
        }
      }

      .survey-scale-answer.progress-scale-component {
        height: 74px;
      }

      textarea {
        border-color: ${({ theme }) => theme.colors.borderColor}
        border-radius: 4px;
        font-size: 16px;
        height: 240px;
        padding: 20px;
        width: 100%;
      }
    }

    .survey-controls {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .surver-footer {
      .survey-progress.progress-scale-component {
        height: 10px;
        margin-bottom: 20px;
        background: linear-gradient(to right, #6adec4 0%, #b7fdfb 100%);
      }

      .survey-question-progress {
        color: ${({ theme }) => theme.colors.text.normal};
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1.5px;
        margin-bottom: 10px;
        text-transform: uppercase;
      }

      .survey-question-progress-count {
        font-size: 14px;
      }
    }
  }
`

const mapStateToProps = state => ({
  surveyMap: state.surveyMap,
  questions: state.questions,
  requests: state.requests
})
const mapDispatchToProps = dispatch => (bindActionCreators({
  completeFeedback,
  fulfillRequest,
  updateSurvey
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Survey)
