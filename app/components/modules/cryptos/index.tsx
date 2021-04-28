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
import { Grid, Placeholder, Container } from 'semantic-ui-react'
import styles from "./Cryptos.module.scss"
import { createMedia } from '@artsy/fresnel'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})


const cryptoItems = 5
const cryptoItemsMobile = 4
const PlaceHolderLoading = ({ items }: { items: any }) => {

    const placeHolderList = []
    for (var i = 0; i < items; i++) {
        placeHolderList.push(<Grid.Column key={i}>
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
            <Grid columns={items} stackable>
                {placeHolderList}
            </Grid>
        </Container>
    )
}

const CryptoInfo = ({ crypto }: { crypto: Crypto }) => {

    let percentageStyle = {
        color: "#63d93a"
    };

    if (Number(crypto.fiatInfo.price24hourPercentage) < 0) {
        percentageStyle = {
            color: "#d93a3a"
        }
    }

    return (
        <Grid.Column className={styles['coin-column']} mobile={8} largeScreen={3} >
            <img src={crypto.image} alt={crypto.fullName} />
            <div className={styles["coin-info"]}>
                <div className={styles['coin-price']}>
                    {crypto.name.toUpperCase()}/USD
                </div>
                <div className={styles['coin-price-info']}>
                    <div className={styles['coin-price-item']}>${Number(crypto.fiatInfo.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                    <div className={`${styles['coin-price-item']} ${styles['coin-price-percentage']}`}
                        style={percentageStyle}>%{Number(crypto.fiatInfo.price24hourPercentage).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                </div>
            </div>
        </Grid.Column>
    )
}

const TopCryptosBy = ({ fetchData = () => { }, cryptos }: { fetchData?: () => void, cryptos: CryptosAppState }) => {
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <MediaContextProvider>
            <Media lessThan='computer' className={styles.headerRow}>
                <Container fluid>
                    {cryptos.topVolume24h.isLoading && <PlaceHolderLoading items={cryptoItemsMobile} />}
                    {cryptos.topVolume24h.hasErrored && <PlaceHolderError />}
                    {!cryptos.topVolume24h.hasErrored && !cryptos.topVolume24h.isLoading &&
                        <Grid columns={cryptoItemsMobile} className={styles['peccunia-top-home']} container>
                            {cryptos.topVolume24h.cryptos.slice(0, cryptoItemsMobile).map(crypto => <CryptoInfo key={crypto.name} crypto={crypto} />)}
                        </Grid>
                    }
                </Container>
            </Media>
            <Media greaterThanOrEqual="computer" className={styles.headerRow}>
                <Container>
                    {cryptos.topVolume24h.isLoading && <PlaceHolderLoading items={cryptoItems}/>}
                    {cryptos.topVolume24h.hasErrored && <PlaceHolderError />}
                    {!cryptos.topVolume24h.hasErrored && !cryptos.topVolume24h.isLoading &&
                        <Grid columns={cryptoItems} className={styles['peccunia-top-home']} container>
                            {cryptos.topVolume24h.cryptos.map(crypto => <CryptoInfo key={crypto.name} crypto={crypto} />)}
                        </Grid>
                    }
                </Container>
            </Media>
        </MediaContextProvider>
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
