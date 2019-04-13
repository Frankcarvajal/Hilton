export const SET_REQUESTS = 'SET_REQUESTS'
export const FULFILL_REQUEST = 'FULFILL_REQUEST'

export function setRequests (requests) {
  return {
    type: SET_REQUESTS,
    payload: requests
  }
}

export function fulfillRequest (requestId) {
  return {
    type: FULFILL_REQUEST,
    payload: requestId
  }
}

const initialState = []

export default function requests (state = initialState, action) {
  switch (action.type) {
    case SET_REQUESTS:
      return [...action.payload]
    case FULFILL_REQUEST:
      const i = state.findIndex((request) => request.id === action.payload)

      if (i !== -1) {
        return [
          ...state.slice(0, i),
          {
            ...state[i],
            dateCompleted: new Date()
          },
          ...state.slice(i + 1)
        ]
      }

      return state
    default:
      return state
  }
}
