import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: '9c3b1bba432e49e6b58bae43f9127fa4',
  },
});

export default api;
