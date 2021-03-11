import {
    FETCH_ORDERHISTORY_REQUEST,
    FETCH_ORDERHISTORY_SUCCESS,
    FETCH_ORDERHISTORY_FAILURE
} from '../actionTypes'


const initialState = {
    loading: false,
    orders: [],
    error: ''
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {

    case FETCH_ORDERHISTORY_REQUEST:
    return {
      ...state,
      loading: true
    }
  
    case FETCH_ORDERHISTORY_SUCCESS:
    return {
      loading: false,
      orders: action.payload,
      error: ''
    }
    
    case FETCH_ORDERHISTORY_FAILURE:
    return {
      loading: false,
      orders: [],
      error: action.payload
    }

    default: return state
  }
}
      
export default ordersReducer