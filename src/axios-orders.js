import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ffdc6.firebaseio.com/'
});

export default instance;