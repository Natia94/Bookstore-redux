import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE
} from '../actionTypes'

  
const initialState = {
  loading: false,
  categories: [],
  error: ''
}
    
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_CATEGORY_REQUEST:
  return {
    ...state,
    loading: true
  }

  case FETCH_CATEGORY_SUCCESS:
  return {
    loading: false,
    categories: action.payload,
    error: ''
  }
  
  case FETCH_CATEGORY_FAILURE:
    return {
      loading: false,
      categories: [],
      error: action.payload
    }
    default: return state
  }
}
    
export default categoryReducer