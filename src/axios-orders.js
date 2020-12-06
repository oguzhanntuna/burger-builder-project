import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3b52a.firebaseio.com/'
});

export default instance;