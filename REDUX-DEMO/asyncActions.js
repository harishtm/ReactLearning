const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware


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

// thunk middleware
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fecthUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data is array of users
            const users = response.data.map(user => user.id)
            dispatch(fecthUsersSuccess(users))

        })
        .catch(error => {
            dispatch(fecthUsersFailuer(error.message))
        })
    }
}

// Redux-Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())