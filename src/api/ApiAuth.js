import axios from './axios';

export const ApiLogin = (data) => axios.post('/api/login', data);
export const ApiRegister = (data) => axios.post('/auth/register', data);
export const getProfile = () => axios.get('/auth/profile');