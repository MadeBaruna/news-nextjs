import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: publicRuntimeConfig.apiKey,
  },
});

export default api;
