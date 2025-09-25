import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.zetime.co/api',
});

export default API;