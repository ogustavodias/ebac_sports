import { combineReducers } from 'redux'
import cartReducer from './cart/slice'
import api from './services/api'

const rootReducer = combineReducers({
  cartReducer,
  [api.reducerPath]: api.reducer
})

export default rootReducer
