export const SET_FEEDBACK = 'SET_FEEDBACK'

export function setFeedback (requests) {
  return {
    type: SET_FEEDBACK,
    payload: requests
  }
}

const initialState = []

export default function feedback (state = initialState, action) {
  switch (action.type) {
    case SET_FEEDBACK:
      return [...action.payload]
    default:
      return state
  }
}
