import axios, { AxiosResponse } from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;

const getTopByMarketCap = (): Promise<AxiosResponse> => axios.get(`${process.env.API_BASE_URL}/top`);

export default {
    getTopByMarketCap
};
