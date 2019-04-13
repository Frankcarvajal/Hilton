import Chance from 'chance'
const chance = new Chance()

export const COMPLETE_FEEDBACK = 'COMPLETE_FEEDBACK'

// @flow
export function completeFeedback (requestId: string) {
  return (dispatch, getState) => {
    const { session, requests, questions, surveyMap } = getState()
    const matchedRequest = requests.find((request) => request.id === requestId)
    const forUser = { ...matchedRequest.user }
    const fromUser = { ...session.user }
    const surveyResults = surveyMap[requestId]

    dispatch({
      type: COMPLETE_FEEDBACK,
      payload: {
        forUser,
        fromUser,
        questions,
        requestId,
        surveyResults
      }
    })
  }
}

const initialState = {}

export default function completedMap (state = initialState, action) {
  switch (action.type) {
    case COMPLETE_FEEDBACK:
      return {
        ...state,
        [action.payload.requestId]: createFeedback(action.payload)
      }
    default:
      return state
  }
}

function createFeedback ({ forUser, fromUser, questions, requestId, surveyResults }) {
  const feedback = {
    dateCompleted: new Date(),
    for: forUser,
    from: fromUser,
    results: [],
    id: chance.guid()
  }

  if (surveyResults) {
    Object.entries(surveyResults).forEach(([questionId, answer]) => {
      const question = questions.find((question) => question.id === questionId)
      feedback.results.push({
        answer,
        id: questionId,
        question: question.questionValue,
        type: question.type
      })
    })
  }

  return feedback
}
