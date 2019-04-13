export const SET_HOTELS = 'SET_HOTELS'

export function setHotels (hotels) {
  return {
    type: SET_HOTELS,
    payload: hotels
  }
}

const initialState = []

export default function hotels (state = initialState, action) {
  switch (action.type) {
    case SET_HOTELS:
      return [...action.payload]
    default:
      return state
  }
}
