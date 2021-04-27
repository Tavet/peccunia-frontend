export interface Crypto {
    name: string
    fullName: string
    image: string
    fiatInfo: FiatInfo
}

export interface FiatInfo {
    price: number
    price24hour: number
    totalVolume: number
    price24hourPercentage: number
}

export interface CryptosAppState {
    topVolume24h: CryptoState
}

export type CryptoState = {
    cryptos: Crypto[],
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

export type DispatchType = (args: CryptoAction) => CryptosAppState
