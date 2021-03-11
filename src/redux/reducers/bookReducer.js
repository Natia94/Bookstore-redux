import {
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE
} from '../actionTypes'
  
    
const initialState = {
  loading: false,
  book: {},
  error: ''
}
      
const bookReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_BOOK_REQUEST:
    return {
      ...state,
      loading: true
    }

    case FETCH_BOOK_SUCCESS:
    return {
      loading: false,
      ...state, book: action.payload,
      error: ''
    }

    case FETCH_BOOK_FAILURE:
    return {
      loading: false,
      book: {},
      error: action.payload
    }
    default: return state
    
  }
}
      
export default bookReducer