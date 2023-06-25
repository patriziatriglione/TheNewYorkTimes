import axios from "axios";
import {
   SEARCH_ARTICLES_FAILURE,
   SEARCH_ARTICLES_REQUEST,
   SEARCH_ARTICLES_SUCCESS,
} from "../types";

// key
const apiKey = process.env.REACT_APP_NYT_API_KEY;

export const getArticlesRequestSent = () => {
  return {
    type: SEARCH_ARTICLES_REQUEST,
  };
};

export const getArticlesSuccess = (articles) => {
  return {
    type: SEARCH_ARTICLES_SUCCESS,
    payload: articles,
  };
};

export const getArticlesFailure = (errorMessage) => {
  return {
    type: SEARCH_ARTICLES_FAILURE,
    payload: errorMessage,
  };
};

// call data from api search
export const fetchDataSearch = (searchQuery) => {
  return async (dispatch) => {
    try {
      dispatch(getArticlesRequestSent());
      const res = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${apiKey}`
      );
      const articlesSearch = res.data.response.docs;
      dispatch(getArticlesSuccess(articlesSearch));
    } catch (error) {
      const errorMessage = error.message;
      dispatch(getArticlesFailure(errorMessage));
   }
   
    
  };
};


