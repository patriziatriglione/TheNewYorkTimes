import { GET_ARTICLES_HOME_FAILURE,
   GET_ARTICLES_HOME_SUCCESS,
   GET_ARTICLES_HOME_REQUEST,
 } from "../types";
 
 
 // initial state 
 const initialState = {
    isLoading: false,
    articlesHome: [],
    error: "",
 };
 

 const homeReducer = (state = initialState, action) => {
    switch (action.type) {
       case GET_ARTICLES_HOME_REQUEST:
          return {
             ...state,
             isLoading: true,
             error: null,
          };
          case GET_ARTICLES_HOME_SUCCESS:
             return {
                ...state,
                articlesHome: action.payload,
                isLoading: false,
             };
       case GET_ARTICLES_HOME_FAILURE:
          return {
             ...state,
             isLoading: false,
             error: action.payload,
          }; 
          default:
          return state;
       }
    }
 
 export default homeReducer;