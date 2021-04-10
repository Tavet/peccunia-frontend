export interface ICrypto {
    id: number
    title: string
    body: string
}

export type CryptoState = {
    cryptos: ICrypto[]
}

export type CryptoAction = {
    type: string
    crypto: ICrypto
}

export type DispatchType = (args: CryptoAction) => CryptoAction
