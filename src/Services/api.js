import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com', // Example API
});

export const fetchProducts = () => api.get('/products');
