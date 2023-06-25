import axios from "axios";
import { GET_ARTICLES_HOME_FAILURE,
GET_ARTICLES_HOME_REQUEST,
GET_ARTICLES_HOME_SUCCESS } from "../types";

// key
const apiKey = process.env.REACT_APP_NYT_API_KEY;

export const getArticlesHomeRequest= () => {
    return {
       type: GET_ARTICLES_HOME_REQUEST,
    };
 };
 export const getArticlesHomeSuccess = (articles) => {
    return {
       type: GET_ARTICLES_HOME_SUCCESS,
       payload: articles,
    };
 };
 export const getArticlesHomeFailure = (errorMessage) => {
    return {
       type: GET_ARTICLES_HOME_FAILURE,
       payload: errorMessage,
    };
 };

 // call data from home api
 export const ArticlesHome = () => {
    return async (dispatch) => {
       try {
          dispatch(getArticlesHomeRequest());
          const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`);
          const articlesHome = res.data.results;
          dispatch(getArticlesHomeSuccess(articlesHome));
       } catch (error) {
          const errorMessage = error.message;
          dispatch(getArticlesHomeFailure(errorMessage));
       }
    }
 }