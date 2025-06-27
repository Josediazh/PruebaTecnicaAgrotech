import axios from 'axios'
import { getEnvVariable } from '../helpers/getEnvVariable'

const { VITE_API_URL } = getEnvVariable();

const dummyApi = axios.create({
    baseURL: VITE_API_URL
})

dummyApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Access-Control-Allow-Credentials': 'true'
    }

    return config;
});

export default dummyApi;