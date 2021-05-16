const redux = require('redux')
const createStore = redux.createStore

// State
const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// Action
const fecthUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}


const fecthUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fecthUsersFailuer = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// Reducer function
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state, // copy of existing state
                loading: true
            }
        
            case FETCH_USERS_SUCCESS:
                return {
                    loading: false,
                    users: action.payload,
                    error: ''
                }
            
            case FETCH_USERS_FAILURE:
                return {
                    loading: false,
                    users: [],
                    error: action.payload
                }
    }
}


// Redux-Store
const store = createStore(reducer)