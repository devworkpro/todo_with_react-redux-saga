// combine reducers if app has multiple reducers
import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
  todos
})

export default rootReducer
