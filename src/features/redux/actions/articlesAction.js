import axios from "axios";
import { GET_ARTICLES_FAILURE, 
  GET_ARTICLES_REQUEST_SENT, 
  GET_ARTICLES_SUCCESS } from "../types";

  // key
const apiKey = process.env.REACT_APP_NYT_API_KEY;

export const getArticlesRequestSent = () => {
  return {
    type: GET_ARTICLES_REQUEST_SENT,
  };
};

export const getArticlesSuccess = (articles) => {
  return {
    type: GET_ARTICLES_SUCCESS,
    payload: articles,
  };
};

export const getArticlesFailure = (errorMessage) => {
  return {
    type: GET_ARTICLES_FAILURE,
    payload: errorMessage,
  };
};

// call data from api
export const fetchData = (section) => {
  return async (dispatch) => {
    try {
      dispatch(getArticlesRequestSent());
      const res = await axios.get(`https://api.nytimes.com/svc/news/v3/content/all/${section}.json?api-key=${apiKey}`);
      const articles = res.data.results;
      dispatch(getArticlesSuccess(articles));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(getArticlesFailure(errorMessage));
    }
  };
};


