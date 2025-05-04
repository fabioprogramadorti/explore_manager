import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Backend NestJS
});

export default api;
