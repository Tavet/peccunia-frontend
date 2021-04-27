import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { DispatchType as CryptoState } from './models/crypto'

// Reducers
import cryptos from './reducer/crypto.reducer'

// States aka Dispatch Type
export interface AppState {
    cryptos: CryptoState
}

export default createStore(combineReducers<AppState>({
    cryptos
}), composeWithDevTools(applyMiddleware(thunk)))