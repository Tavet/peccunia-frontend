export interface Crypto {
    name: string
    fullName: string
    fiatInfo: FiatInfo
}

export interface FiatInfo {
    price: number
    volume24hour: number
    marketCap: number
    supply: number
    maxSupply: number
}

export type CryptoState = {
    cryptos: any,
    hasErrored: boolean,
    isLoading: boolean
}

export type CryptoAction = {
    type: string
    crypto?: Crypto
    cryptos?: Crypto[]
    hasErrored?: boolean
    isLoading?: boolean
}

export type DispatchType = (args: CryptoAction) => CryptoAction
