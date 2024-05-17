import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // ou a URL correta da sua API
});

export const getUsers = () => api.get('/users');
export const createUser = (formData: FormData) => api.post('/users', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
export const deleteUser = (id: number) => api.delete(`/users/${id}`);
export const updateUser = (id: number, formData: FormData) => api.put(`/users/edit/${id}`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default api;
