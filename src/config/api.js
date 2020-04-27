import axios from 'axios';

// set config defaults while creating instance
export const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

// alter config after instance is set
export const setAuthToken = (token) => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
