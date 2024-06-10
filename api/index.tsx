import axios, { AxiosInstance } from 'axios';
const instance: AxiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;

