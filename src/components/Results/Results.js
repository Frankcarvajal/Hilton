import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

import { List, ProgressScale } from '../../components'

const Results = ({ children, className, results, userName }) => (
  <Results.Styled className={classnames('results-component', { [className]: className })}>
    {userName && <li className='results-by'>{userName}'s Feedback</li>}

    {results && results.map(({ type, id, question, answer }) => (
      <li key={id} className={classnames({ 'text-answer': type === 'text' })}>
        <p className='result-question'>{question}</p>
        <div className='result-answer'>
          <RenderAnswer type={type} answer={answer} />
        </div>
      </li>
    ))}
  </Results.Styled>
)

const RenderAnswer = ({ type, answer }) => {
  switch (type) {
    case 'scale':
      return (
        <ProgressScale
          className='render-progress-scale'
          color={getScaleColor(10, answer.value)}
          gutterWidth={2}
          max={10}
          readOnly
          value={answer.value}
        />
      )
    case 'multipleChoice':
      return (
        <ProgressScale
          className='render-progress-scale'
          color={getScaleColor(3, answer.value)}
          gutterWidth={2}
          max={3}
          readOnly
          value={answer.value}
        />)
    case 'text':
      return answer.value
  }
}

function getScaleColor (max, value) {
  let color
  if (max === 3) {
    switch (value) {
      case 1:
        color = '#DE521D'
        break
      case 2:
        color = '#F5DD07'
        break
      case 3:
        color = '#2BBF6A'
        break
    }
  } else if (max === 10) {
    switch (value) {
      case 1:
      case 2:
      case 3:
        color = '#DE521D'
        break
      case 4:
      case 5:
        color = '#FF8C21'
        break
      case 6:
      case 7:
        color = '#F5DD07'
        break
      case 8:
      case 9:
      case 10:
        color = '#2BBF6A'
        break
    }
  }

  return color
}

Results.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({
    answer: PropTypes.any,
    id: PropTypes.string,
    question: PropTypes.string,
    type: PropTypes.string
  })),
  userName: PropTypes.string
}

Results.Styled = styled(List)`
  &.results-component {
    padding-bottom: 150px;

    > li {
      .result-question, .result-answer {
        flex: 1;
        width: 100%;
      }

      .render-progress-scale.progress-scale-component {
        height: 28px;
      }

      &.text-answer {
        flex-direction: column;
        height: auto;
        justify-content: flex-start;
        padding-bottom: 20px;
        padding-top: 20px;

        .result-question {
          margin-bottom: 15px;
        }
      }

      &.results-by {
        height: 45px;
        font-size: 22px;
      }
    }
  }
`

export default Results
