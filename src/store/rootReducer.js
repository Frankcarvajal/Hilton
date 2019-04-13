import { combineReducers } from 'redux'

import completedMap from './completedMap'
import feedback from './feedback'
import questions from './questions'
import requests from './requests'
import session from './session'
import surveyMap from './surveyMap'
import hotels from './hotels'

const rootReducer = combineReducers({
  completedMap,
  feedback,
  questions,
  requests,
  session,
  surveyMap,
  hotels
})

export default rootReducer
