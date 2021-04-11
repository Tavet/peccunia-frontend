import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { DispatchType as CryptoState } from './models/crypto'

// Reducers
import crypto from './reducer/crypto.reducer'

// States aka Dispatch Type
export interface RootState {
    crypto: CryptoState
}

export default createStore(combineReducers<RootState>({
    crypto
}), composeWithDevTools(applyMiddleware(thunk)))