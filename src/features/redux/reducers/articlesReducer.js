import { GET_ARTICLES_FAILURE, 
   GET_ARTICLES_REQUEST_SENT, 
   GET_ARTICLES_SUCCESS,
} from "../types";


// Initial state 
const initialState = {
   isLoading: false,
   articles: [],
   error: "",
};


const articlesReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_ARTICLES_REQUEST_SENT:
         return {
            ...state,
            isLoading: true,
            error: null,
         };
         case GET_ARTICLES_SUCCESS:
            return {
               ...state,
               articles: action.payload,
               isLoading: false,
            };
      case GET_ARTICLES_FAILURE:
         return {
            ...state,
            isLoading: false,
            error: action.payload,
         }; 
         default:
         return state;
      }
   }

export default articlesReducer;