import axios from 'axios';
import { store } from '../Redux/store';

const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    const state = store.getState();
    if(state.token != null) {
        console.log(state.token)
        req.headers.Authorization = `Bearer ${state.token}`;
    } else {
        console.log("INTERCEPTOR, NO TOKEN");
    }

    return req;
})

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const getProducts = () => API.get('/products/getallproducts');