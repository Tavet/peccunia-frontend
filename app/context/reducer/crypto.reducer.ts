import { combineReducers } from 'redux'

import * as actionTypes from "../actions/crypto.action"
import { CryptoState, CryptoAction, DispatchType } from "../models/crypto"

const initialState: CryptoState = {
    cryptos: [
    ],
    hasErrored: false,
    isLoading: false
}

const topMarketCap = (
    state: CryptoState = initialState,
    action: CryptoAction
): CryptoState => {
    switch (action.type) {
        case actionTypes.GET_TOP_CRYPTOS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading || false
            }
        case actionTypes.GET_TOP_CRYPTOS_ERROR:
            return {
                ...state,
                hasErrored: action.hasErrored || false,
            }
        case actionTypes.GET_TOP_CRYPTOS_SUCCESS:
            return {
                ...state,
                cryptos: action.cryptos || []
            }
    }
    return state
}


export default combineReducers<DispatchType>({
    topMarketCap
})