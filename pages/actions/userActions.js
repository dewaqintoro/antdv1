import React from 'react'
import axios from 'axios'
 
export const GET_COVIDS_LIST = "GET_COVIDS_LIST"
export const GET_COVID_INDO = "GET_COVID_INDO"
export const GET_COVID_POSITIF = "GET_COVID_POSITIF"
export const GET_COVID_SEMBUH = "GET_COVID_SEMBUH"
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const GET_USER_INFO = "GET_USER_INFO";
export const LOGIN_STATUS = "LOGIN_STATUS";
export const ADD_PRODUCT = "ADD_PRODUCT";





// const baseURL = 'https://api.kawalcorona.com/indonesia/'

export const getCovidsList = () => {
  return (dispatch) => {
    // axios.get('http://localhost:3004/covids') 
    axios.get(`https://api.kawalcorona.com/indonesia/provinsi/`) 


      .then(function (response) {
        console.log("action prov",response.data);
        dispatch({
          type: GET_COVIDS_LIST,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: GET_COVIDS_LIST,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
} 

export const getCovidIndo = () => {
  return (dispatch) => {
    axios.get('https://api.kawalcorona.com/indonesia/') 

      .then(function (response) {
        // console.log("action indo",response);
        dispatch({
          type: GET_COVID_INDO,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: GET_COVID_INDO,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const getCovidPositif = () => {
  return (dispatch) => {
    axios.get('https://api.kawalcorona.com/positif') 

      .then(function (response) {
        console.log("action positif",response);
        dispatch({
          type: GET_COVID_POSITIF,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: GET_COVID_POSITIF,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}


export const getCovidSembuh = () => {
  return (dispatch) => {
    axios.get('https://api.kawalcorona.com/sembuh') 

      .then(function (response) {
        // console.log("action positif",response);
        dispatch({
          type: GET_COVID_SEMBUH,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: GET_COVID_SEMBUH,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}


export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const getUserInfo = (userInfo) => {
  return {
    type: GET_USER_INFO,
    payload: {
      userInfo
    }
  };
};

export const changeLoginStatus = (isLogin) => {
  return {
    type: LOGIN_STATUS,
    isLogin: true
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
        product
  };
};