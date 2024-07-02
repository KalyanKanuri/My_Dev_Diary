import axios from 'axios'

const APIHandler = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default APIHandler;