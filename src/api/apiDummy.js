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
        'x-token': localStorage.getItem('token')
    }
    config.withCredentials = true;

    return config;
});

export default dummyApi;