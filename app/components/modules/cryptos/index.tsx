// Redux
import { connect } from 'react-redux';
import { cryptosFetchData } from '../../../context/creators/crypto.creators'
import { DispatchType as CryptoDispatchType } from '../../../context/models/crypto'
import { AppState } from '../../../context/store';
import { CryptosAppState } from '../../../context/models/crypto';

// Next.js
import { useEffect } from 'react';

// UI
import { Grid, Placeholder, Segment, Header, Container } from 'semantic-ui-react'

import { ThunkDispatch } from 'redux-thunk';

const PlaceHolderLoading = () => {
    return (
        <Container fluid><Grid columns={3} stackable>
            <Grid.Column>
                <Segment raised>
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Segment>
            </Grid.Column>

            <Grid.Column>
                <Segment raised>
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Segment>
            </Grid.Column>

            <Grid.Column>
                <Segment raised>
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Segment>
            </Grid.Column>
        </Grid>
        </Container>
    )
}

const TopCryptosBy = ({ fetchData = () => { }, cryptos }: { fetchData?: () => void, cryptos: CryptosAppState }) => {
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {cryptos.topMarketCap.isLoading && <PlaceHolderLoading />}
            <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
        </>
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