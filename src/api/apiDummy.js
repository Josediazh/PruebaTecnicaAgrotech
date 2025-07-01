import axios from 'axios'
import { getEnvVariable } from '../helpers/getEnvVariable'

const { VITE_API_URL, VITE_URL_SERVER } = getEnvVariable();

const dummyApi = axios.create({
    baseURL: VITE_API_URL
})

dummyApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': VITE_URL_SERVER,
        'Access-Control-Allow-Credentials': 'true'
    }

    return config;
});

export default dummyApi;