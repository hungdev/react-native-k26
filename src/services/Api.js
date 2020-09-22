import axios from 'axios'
import { store } from '../../App';
import { removeAuth } from '../actions/authAction'

const instance = axios.create({
  baseURL: 'http://social.hungvu.net',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 60000
});

instance.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
});

// Add a response interceptor
instance.interceptors.response.use((response) => response, (error) => {
  // Do something with response error
  if (error?.response?.status === 401) {
    // window.alert('Something went wrong!. Please login again');  //eslint-disable-line
    // window.location.reload();
    store.dispatch(removeAuth());
    // window.location.href = '/#/login';
  }
  return Promise.reject(error.response);
});

export const login = (params) => {
  return instance.post('/login', params) // params => {id: 1,..}
}
export const getAllPost = (params) => {
  return instance.get('/get-all-post', { params: params })
}

export function createPost(params) {
  return instance.post('/create-post', params);
}

export function getMe(params) {
  return instance.get(`/get-me`, params);
}

export function updatePost(params) {
  return instance.put(`/update-post`, params);
}

export function deletePost(params) {
  console.log('params', params)
  return instance.delete(`/post-delete-many`, params);
}