const LOAD_SURVEY = 'LOAD_SURVEY'
const UPDATE_SURVEY = 'UPDATE_SURVEY'
const CLEAR_SURVEY = 'CLEAR_SURVEY'

// @flow
export function loadSurvey (requestId: string) {
  return {
    type: LOAD_SURVEY,
    payload: { requestId }
  }
}

// @flow
export function updateSurvey (requestId: string, formState: {}) {
  return {
    type: UPDATE_SURVEY,
    payload: { requestId, formState }
  }
}

// @flow
export function clearSurvey (requestId: string) {
  return {
    type: CLEAR_SURVEY,
    payload: { requestId }
  }
}

const initialState = {}

export default function surveyMap (state = initialState, action) {
  switch (action.type) {
    case LOAD_SURVEY:
      return !state[action.payload.requestId]
        ? {
          ...state,
          [action.payload.requestId]: {}
        }
        : state
    case UPDATE_SURVEY:
      return {
        ...state,
        [action.payload.requestId]: {
          ...action.payload.formState
        }
      }
    case CLEAR_SURVEY:
      return Object.keys(state)
        .filter(requestId => requestId !== action.payload)
        .reduce((current, next) => ({
          ...current,
          [next]: state[next]
        }), {})
    default:
      return state
  }
}
