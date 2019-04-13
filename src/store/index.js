import configureStore from './configureStore'
import rootReducer from './rootReducer'
import {
  feedback,
  questions,
  requests,
  session,
  hotels
} from '../mockData'

const initialState = {
  feedback,
  questions,
  requests,
  session,
  hotels
}

const store = configureStore(initialState, rootReducer)

export default store
