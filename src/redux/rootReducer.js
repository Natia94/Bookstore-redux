import { combineReducers } from 'redux'

import categoryReducer from './reducers/categoryReducer'
import bookReducer from './reducers/bookReducer'
import userReducer from './reducers/userReducer'
import ordersReducer from './reducers/ordersReducer'
import signUpReducer from './reducers/signUpReducer'

const rootReducer = combineReducers({
  books: categoryReducer,
  book: bookReducer,
  user: userReducer,
  orders: ordersReducer,
  signUp: signUpReducer
})
  
export default rootReducer