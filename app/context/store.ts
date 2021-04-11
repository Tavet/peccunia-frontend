import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { DispatchType as CryptoState } from './models/crypto'
import crypto from './reducer/crypto.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface RootState {
    crypto: CryptoState
}

export default createStore(combineReducers<RootState>({
    crypto
}), composeWithDevTools(applyMiddleware(thunk)))