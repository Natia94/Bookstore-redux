import axios from 'axios'

import {
    FETCH_BOOK_REQUEST,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_FAILURE
} from '../actionTypes'


export const fetchBookRequest = () => {
    return {
        type: FETCH_BOOK_REQUEST
    }
}

export const fetchBookSuccess = book => {
    return {
        type: FETCH_BOOK_SUCCESS,
        payload: book
    }
}

export const fetchBookFailure = book => {
    return {
        type: FETCH_BOOK_FAILURE,
        payload: book
    }
}

export const fetchBook = (bookId) => {
    return (dispatch) => {
      dispatch(fetchBookRequest())
        axios.get(`http://localhost:8080/getBookByBookId?bookId=${bookId}`)
        .then(response => {
          const book = response.data
          dispatch(fetchBookSuccess(book))
        })
        .catch(error => {
          dispatch(fetchBookFailure(error.message))
        })
    }
}