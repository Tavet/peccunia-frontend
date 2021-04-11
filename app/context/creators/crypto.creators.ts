import * as actionTypes from "../actions/crypto.action"
import { ICrypto, CryptoAction, DispatchType } from "../models/crypto"
import CryptoVolumeClient from "../../api/CryptoVolumeClient";

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

export const cryptosFetchData = (): any => {
    return (dispatch: DispatchType) => {
        dispatch(actionTypes.cryptosIsLoading(true));
        CryptoVolumeClient.get24HVolume()
            .then((response) => {
                console.log("response", response)
                if (response.status != 200) {
                    throw Error(response.statusText);
                }
                dispatch(actionTypes.cryptosIsLoading(false));
                return response;
            })
            .then((response) => response.data)
            .then((items) => dispatch(actionTypes.cryptosFetchDataSuccess(items)))
            .catch((err) => {
                console.log("ERROR", err)
                return dispatch(actionTypes.cryptosHasErrored(true))
            });
    };
}