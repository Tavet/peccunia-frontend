import axios from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;

const getTopByMarketCap = () => axios.get(`http://localhost:9090/top`);

export default {
    getTopByMarketCap
};