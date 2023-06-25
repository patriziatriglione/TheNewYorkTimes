// articlesReducer.js
import {
    SEARCH_ARTICLES_REQUEST,
    SEARCH_ARTICLES_SUCCESS,
    SEARCH_ARTICLES_FAILURE,
  } from "../types";
  
  // initial state
  const initialState = {
    isLoading: false,
    articlesSearch: [],
    error: null,
    searchQuery: "", 
  };
  
  const articleSearchReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_ARTICLES_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case SEARCH_ARTICLES_SUCCESS:
        return {
          ...state,
          isLoading: false,
          articlesSearch: action.payload,
        };
      case SEARCH_ARTICLES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default articleSearchReducer;
  