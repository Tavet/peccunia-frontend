// Redux
import { connect } from 'react-redux';
import { cryptosFetchData } from '../../../context/creators/crypto.creators'
import { CryptoAction, DispatchType as CryptoDispatchType } from '../../../context/models/crypto'

// Next.js
import { useEffect } from 'react';

// UI
import {
    Header,
} from 'semantic-ui-react'

const Top10Volume = ({ fetchData = () => { } }: { fetchData?: () => void }) => {

    useEffect(() => {
        fetchData()
    })

    return (
        <>
            <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
        </>
    )
}
const mapStateToProps = (state: CryptoAction) => {
    return {
        cryptos: state.cryptos,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch: CryptoDispatchType) => {
    return {
        fetchData: () => dispatch(cryptosFetchData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Top10Volume);