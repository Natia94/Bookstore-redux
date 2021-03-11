import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    USER_IS_LOGEDIN
} from '../actionTypes'

const initialState = {
    loading: false,
    user:{},
    error: '',
    userLogedIn: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
       case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_SUCCESS: 
            return {
                ...state,
                loading: false,
                user:action.payload,
                error: '',
                userLogedIn: true
            };

        case USER_IS_LOGEDIN:
            return{
                ...state,
                loading: false,
                user:action.payload,
                error: '',
                userLogedIn: action.payload
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                user: {},
                error: action.payload
            }
        default:
        return state;
    }
}

export default userReducer;