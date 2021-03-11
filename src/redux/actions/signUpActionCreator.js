import axios from 'axios';
import {
    SIGN_UP_USER_REQUEST,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAILURE
} from '../actionTypes'

export const signUpUserRequest = () => {
    return {
        type: SIGN_UP_USER_REQUEST
    }
}

export const signUpUserSuccess = user => {
    return {
        type: SIGN_UP_USER_SUCCESS,
        payload: user
    }
}

export const signUpUserFailure = user => {
    return {
        type: SIGN_UP_USER_FAILURE,
        payload: user
    }
}

export const signUpUser = (userObj) => {
    return (dispatch) => {
      dispatch(signUpUserRequest())

      axios.post(`http://localhost:8080/createUser?firstname=${userObj.firstName}&lastname=${userObj.lastName}&username=${userObj.username}&email=${userObj.email}&password=${userObj.password}`)
        .then(response => {
          const user = response.data
          dispatch(signUpUserSuccess(user))
        })

        .catch(error => {
          dispatch(signUpUserFailure(error.message))
        })
    }
}



