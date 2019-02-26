import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: '0de22080bec64af480ffb07903de4441',
  },
});

export default api;
