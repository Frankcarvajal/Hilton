export const CLEAR_SESSION = 'CLEAR_SESSION'
export const SET_SESSION = 'SET_SESSION'

export function logout () {
  return { type: CLEAR_SESSION }
}

export function login ({ name }) {
  return {
    type: SET_SESSION,
    payload: {
      firstName: 'Jane',
      lastName: 'Smith',
      initials: 'JS',
      id: 'user-js-1'
    }
  }
}

const initialState = {}

export default function session (state = initialState, action) {
  switch (action.type) {
    case CLEAR_SESSION:
      return {}
    case SET_SESSION:
      return {
        ...state,
        user: { ...action.payload }
      }
    default:
      return state
  }
}
