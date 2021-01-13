import { combineReducers } from 'redux'
import { reviewReducer } from './reviewReducer'
import { userReducer } from './userReducer'
import { systemReducer } from './systemReducer'
import { jamReducer } from './jamReducer'

export const rootReducer = combineReducers({
  systemModule: systemReducer,
  reviewModule: reviewReducer,
  userModule: userReducer,
  jamModule: jamReducer
})
