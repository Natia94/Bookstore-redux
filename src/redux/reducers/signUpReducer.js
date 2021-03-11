import {
    SIGN_UP_USER_REQUEST,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAILURE
} from '../actionTypes'

const initialState = {
    loading: false,
    userSignUp: [],
    error: ''
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_USER_REQUEST:
        return {
            ...state,
            loading: true
        }

        case SIGN_UP_USER_SUCCESS:
        return {
            loading: false,
            ... state, userSignUp: action.payload,
            error: ''
        }
    
        case SIGN_UP_USER_FAILURE:
            return {
            loading: false,
            userSignUp: [],
            error: action.payload
        }
        default: return state
    }
}

export default signUpReducer