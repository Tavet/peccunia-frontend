export interface ICrypto {
    id: number
    name: string
    fullName: string
    price: string
}

export type CryptoState = {
    cryptos: any,
    hasErrored: boolean,
    isLoading: boolean
}

export type CryptoAction = {
    type: string
    crypto?: ICrypto
    cryptos?: any
    hasErrored?: boolean
    isLoading?: boolean
}

export type DispatchType = (args: CryptoAction) => CryptoAction
