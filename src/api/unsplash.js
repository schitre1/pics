import axios from 'axios';

//create customized copy of axios instance to create requests
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 680b63a5ae3e9178ce0faad47cb1385121ffb27e93cf7a9227f5aba0f19f1f27'
    }
});