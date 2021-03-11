import axios from 'axios'

import {
    FETCH_ORDERHISTORY_REQUEST,
    FETCH_ORDERHISTORY_SUCCESS,
    FETCH_ORDERHISTORY_FAILURE
} from '../actionTypes'

export const fetchOrdersRequest = () => {
    return {
        type: FETCH_ORDERHISTORY_REQUEST,
    }
}

export const fetchOrdersSuccess = orders => {
    return {
        type: FETCH_ORDERHISTORY_SUCCESS,
        payload: orders
    }
}

export const fetchOrdersFailure = orders => {
    return {
        type: FETCH_ORDERHISTORY_FAILURE,
        payload: orders
    }
}

export const fetchOrders = () => {
    return (dispatch) => {
      dispatch(fetchOrdersRequest())
        axios.get("http://localhost:8080/getAllOrders")
        .then(response => {
          const orders = response.data
          dispatch(fetchOrdersSuccess(orders))
        })
        .catch(error => {
          dispatch(fetchOrdersFailure(error.message))
        })
    }
}