import axios from 'axios';
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    USER_IS_LOGEDIN
} from '../actionTypes'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = user => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

export const fetchUserFailure = user => {
    return {
        type: FETCH_USER_FAILURE,
        payload: user
    }
}

export const userLogedIn = (isLogedIn) => {
    return {
        type: USER_IS_LOGEDIN,
        payload: isLogedIn
    }
}

export const logInUser = (userObj) => {
    return (dispatch) => {
      dispatch(fetchUserRequest())

      axios.post('http://localhost:8080/getLogin?username=admin&password=admin', userObj)
        .then(response => {
          const user = response.data
          dispatch(fetchUserSuccess(user))
        })
        .catch(error => {
          dispatch(fetchUserFailure(error.message))
        })
    }
}

export const isLoggedIn = () => {
    return(dispatch) => {
        axios.post('http://localhost:8080/userIsLogged?username=admin&password=admin')
        .then(response => {
            const isLoggedIn = response.data
            dispatch(userLogedIn(isLoggedIn))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const isLoggedOut = () => {
    //dispatch logout
}
