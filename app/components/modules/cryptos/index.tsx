// Redux
import { connect } from 'react-redux';
import { cryptosFetchData } from '../../../context/creators/crypto.creators'
import { AppState } from '../../../context/store';
import { CryptosAppState } from '../../../context/models/crypto';

// Modules
import PlaceHolderError from "../placeholder-error"

// Next.js
import { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';

// UI
import { Grid, Placeholder, Container } from 'semantic-ui-react'
import "./Cryptos.module.scss"

const PlaceHolderLoading = () => {

    const cryptoItems = 5

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

const TopCryptosBy = ({ fetchData = () => { }, cryptos }: { fetchData?: () => void, cryptos: CryptosAppState }) => {
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Container fluid>
            {cryptos.topMarketCap.isLoading && <PlaceHolderLoading />}
            {cryptos.topMarketCap.hasErrored && <PlaceHolderError />}
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

export default connect(mapStateToProps, mapDispatchToProps)(TopCryptosBy);