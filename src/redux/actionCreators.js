import axios from 'axios'

import {
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE
} from './actionTypes'


export const fetchBooksRequest = () => {
    return {
        type: FETCH_CATEGORY_REQUEST
    }
}

export const fetchBooksSuccess = books => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload: books
    }
}

export const fetchBooksFailure = books => {
    return {
        type: FETCH_CATEGORY_FAILURE,
        payload: books
    }
}



export const fetchBooks = (categoryId) => {
    return (dispatch) => {
      dispatch(fetchBooksRequest())
        axios.get(`http://localhost:8080/getBooksByCategoryId?categoryId=${categoryId}`)
        .then(response => {
          const books = response.data
          dispatch(fetchBooksSuccess(books))
        })
        .catch(error => {
          dispatch(fetchBooksFailure(error.message))
        })
    }
}



