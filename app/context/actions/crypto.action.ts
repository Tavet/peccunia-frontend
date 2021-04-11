import { CryptoAction, ICrypto } from "../models/crypto"

export const GET_TOP_CRYPTOS_LOADING = "GET_TOP_CRYPTOS_LOADING"
export const GET_TOP_CRYPTOS_SUCCESS = "GET_TOP_CRYPTOS_SUCCESS"
export const GET_TOP_CRYPTOS_ERROR = "GET_TOP_CRYPTOS_ERROR"

export const cryptosHasErrored = (hasErrored: boolean): CryptoAction => {
    return {
        type: GET_TOP_CRYPTOS_ERROR,
        hasErrored
    };
}

export const cryptosIsLoading = (isLoading: boolean): CryptoAction => {
    return {
        type: GET_TOP_CRYPTOS_LOADING,
        isLoading
    };
}

export const cryptosFetchDataSuccess = (cryptos: ICrypto[]): CryptoAction => {
    return {
        type: GET_TOP_CRYPTOS_SUCCESS,
        cryptos
    };
}