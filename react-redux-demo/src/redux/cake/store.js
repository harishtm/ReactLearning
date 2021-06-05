import { createStore } from 'redux'
import cakeReducer from './cakeReducer'
import rootReducer from '../rootReducer'


export const store = createStore(rootReducer)