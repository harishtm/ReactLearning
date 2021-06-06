import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
// import cakeReducer from './cakeReducer'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'


export const store = createStore(rootReducer, composeWithDevTools(
                            applyMiddleware(logger, thunk)
                        ))