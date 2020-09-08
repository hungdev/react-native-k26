import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://social.hungvu.net',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 60000
});

export const login = (params) => {
  return instance.post('/login', params)
}
export const getAllPost = (params) => {
  return instance.get('/get-all-post', { params: params })
}