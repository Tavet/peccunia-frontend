import axios, { AxiosResponse } from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;

const getTopVolume24h = (): Promise<AxiosResponse> => axios.get(`${process.env.API_BASE_URL}/top/volume24h`);

export default {
    getTopVolume24h
};
