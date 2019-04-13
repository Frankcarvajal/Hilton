export const SET_QUESTIONS = 'SET_QUESTIONS'

export function setHotels (hotels) {
  return {
    type: SET_QUESTIONS,
    payload: hotels
  }
}

const initialState = []

export default function questions (state = initialState, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return [...action.payload]
    default:
      return state
  }
}
