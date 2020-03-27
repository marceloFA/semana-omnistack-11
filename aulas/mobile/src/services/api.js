import axios from 'axios';

const configs = {
    baseURL: 'http://10.0.0.100:3333'
};

const api = axios.create(configs);

export default api;