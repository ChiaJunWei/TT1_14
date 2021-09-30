import { AUTH, ERROR, LOADING, UPDATE_USER } from "./actionTypes.js";

import * as api from '../API/index.js';

export const signIn = (formData, router) => async (dispatch) => {
    try {
        console.log("SIGNINACTION: ", formData)
        const { data } = await api.signIn(formData);
        console.log("DATA: " + JSON.stringify(data));
        dispatch({type : AUTH, data});

        router.push('/');
    } catch (error) {
        const data = error?.response?.data?.message
        console.log("ERROR MSG: " + error);
        dispatch({type : ERROR, data})
    }
}

export const signUp = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        console.log("DATA: " + JSON.stringify(data));
        dispatch({type : AUTH, data});

        router.push('/');
        return true;
    } catch (error) {
        console.log(error);
        const data = error?.response?.data?.message
        console.log("ERROR MSG: " + data != null ? data : error);
        dispatch({type : ERROR, data})
    }
}

export const newTransaction = (formData) => async (dispatch) => {
    try {
        console.log("FORMDATA:", formData);       
        const { data } = await api.createTransaction(formData);
        dispatch({type : UPDATE_USER, data});
    } catch (error) {
        const data = error?.response?.data?.message
        console.log("ERROR MSG: " + data ? data : error);
        dispatch({type : ERROR, data})
    }
}

export const newCard = (formData) => async (dispatch) => {
    console.log("NEW CARD ACTION");
    try {
        console.log("FORMDATA:", formData);       
        const { data } = await api.createCard(formData);
        console.log("NEWCARD DATA: " + data);
        dispatch({type : UPDATE_USER, data});
    } catch (error) {
        const data = error?.response?.data?.message
        console.log("ERROR MSG: " + data ? data : error);
        dispatch({type : ERROR, data})

    }
}