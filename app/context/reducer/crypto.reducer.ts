import { combineReducers } from 'redux'

import * as actionTypes from "../actions/crypto.action"
import { CryptoState, CryptoAction, ICrypto, DispatchType } from "../models/crypto"

const initialState: CryptoState = {
    cryptos: [
        {
            id: 1,
            title: "post 1",
            body:
                "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
            id: 2,
            title: "post 2",
            body:
                "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
        },
    ],
}

const reducer = (
    state: CryptoState = initialState,
    action: CryptoAction
): CryptoState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: ICrypto = {
                id: Math.random(), // not really unique
                title: action.crypto.title,
                body: action.crypto.body,
            }
            return {
                ...state,
                cryptos: state.cryptos.concat(newArticle),
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: ICrypto[] = state.cryptos.filter(
                article => article.id !== action.crypto.id
            )
            return {
                ...state,
                cryptos: updatedArticles,
            }
    }
    return state
}


export default combineReducers<DispatchType>({
    reducer
})