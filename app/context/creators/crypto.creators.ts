import * as actionTypes from "../actions/crypto.action"
import { ICrypto, CryptoAction, DispatchType } from "../models/crypto"

export function addArticle(article: ICrypto) {
    const action: CryptoAction = {
        type: actionTypes.ADD_ARTICLE,
        crypto: article,
    }

    return simulateHttpRequest(action)
}

export function removeArticle(article: ICrypto) {
    const action: CryptoAction = {
        type: actionTypes.REMOVE_ARTICLE,
        crypto: article,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CryptoAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}