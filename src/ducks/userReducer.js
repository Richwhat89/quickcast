import axios from 'axios';

const initialState = {
    user: {},
}

const LOGIN = 'LOGIN';
const ADD_USER = 'ADD_USER';
const EDIT_USER = 'EDIT_USER';
const GET_USER = 'GET_USER';

export function login(email, password){
    return{
        type: LOGIN,
        payload: axios.post('/auth/login', {email, password})
    }
}

export function register(email, username, password){
    return{
        type: ADD_USER,
        payload: axios.post('/auth/register', {email, username, password})
    }
}

export function edit(email, username, password){
    return{
        type: EDIT_USER,
        payload: axios.put('/auth/edit', {email, username, password})
    }
}

export function getUser(user_id){
    return{
        type: GET_USER,
        payload: axios.get('/auth/users', getUser)
    }
}

export default function userReducer(state = initialState, action){
    console.log(action. type, action.payload)
    switch(action.type){
        case LOGIN + '_FULFILLED':
        return{...state, user: action.payload.data};

        case LOGIN + '_REJECTED':
        return{...state, error: 'Unable to login'}

        case ADD_USER + '_FULFILLED':
        return{...state, user: action.payload.data};

        case ADD_USER + '_REJECTED':
        return{...state, error: 'Unable to register'}

        case EDIT_USER + '_FULFILLED':
        return{...state, user: action.payload.data};

        case EDIT_USER + '_REJECTED':
        return{...state, error: 'Unable to update'}

        case GET_USER + '_FULFILLED':
        return{...state, user: action.payload.data};

        case GET_USER + '_REJECTED':
        return{...state, error: 'No user'}

        default:
        return state;
    }
}