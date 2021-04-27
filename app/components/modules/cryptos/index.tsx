// Redux
import { connect } from 'react-redux';
import { cryptosFetchData } from '../../../context/creators/crypto.creators'
import { AppState } from '../../../context/store';

// Models
import { CryptosAppState, Crypto } from '../../../context/models/crypto';

// Modules
import PlaceHolderError from "../placeholder-error"

// Next.js
import { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';

// UI
import { Grid, Placeholder, Container, Header } from 'semantic-ui-react'
import styles from "./Cryptos.module.scss"

const cryptoItems = 5
const PlaceHolderLoading = () => {

    const placeHolderList = []
    for (var i = 0; i < cryptoItems; i++) {
        placeHolderList.push(<Grid.Column>
            <Placeholder inverted>
                <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Header>
            </Placeholder>
        </Grid.Column >)
    }
    return (
        <Container fluid>
            <Grid columns={cryptoItems} stackable>
                {placeHolderList}
            </Grid>
        </Container>
    )
}

const CryptoInfo = ({ crypto }: { crypto: Crypto }) => {
    return (
        <Grid.Column className={styles['coin-column']}>
            <img src={crypto.image} alt={crypto.fullName} />
            <div className="coin-info">
                <Header as='h5'>
                    {crypto.name.toUpperCase()}/USD
                </Header>
                <p className={styles['coin-price']}>${crypto.fiatInfo.price}</p>
            </div>
        </Grid.Column>
    )
}

const TopCryptosBy = ({ fetchData = () => { }, cryptos }: { fetchData?: () => void, cryptos: CryptosAppState }) => {
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Container fluid>
            {cryptos.topVolume24h.isLoading && <PlaceHolderLoading />}
            {cryptos.topVolume24h.hasErrored && <PlaceHolderError />}
            {!cryptos.topVolume24h.hasErrored && !cryptos.topVolume24h.isLoading &&
                <Grid columns={cryptoItems} className={styles['peccunia-top-home']} stackable
                >
                    {cryptos.topVolume24h.cryptos.map(crypto => <CryptoInfo crypto={crypto} />)}
                </Grid>
            }
        </Container>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        cryptos: state.cryptos
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return {
        fetchData: () => dispatch(cryptosFetchData())
    };
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(TopCryptosBy);
