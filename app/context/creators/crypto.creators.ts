import * as actionTypes from "../actions/crypto.action"
import { DispatchType } from "../models/crypto"
import CryptoVolumeClient from "../../api/CryptoVolumeClient";

export const cryptosFetchData = (): any => {
    return (dispatch: DispatchType) => {
        dispatch(actionTypes.cryptosIsLoading(true));
        CryptoVolumeClient.getTopByMarketCap()
            .then((response) => {
                if (response.status != 200) {
                    throw Error(response.statusText);
                }
                dispatch(actionTypes.cryptosIsLoading(false));
                return response;
            })
            .then((response) => response.data)
            .then((items) => dispatch(actionTypes.cryptosFetchDataSuccess(items.data)))
            .catch(() => dispatch(actionTypes.cryptosHasErrored(true)));
    };
}