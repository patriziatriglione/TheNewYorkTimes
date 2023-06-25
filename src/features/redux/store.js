import { configureStore } from '@reduxjs/toolkit';
import newThemeReducer from './reducers/newThemeReducer';
import articlesReducer from './reducers/articlesReducer';
import articleSearchReducer from './reducers/articleSearchReducer';
import homeReducer from './reducers/homeReducer';

const store = configureStore({
  reducer: {
    newTheme: newThemeReducer,
    articleState: articlesReducer,
    articleSearch: articleSearchReducer,
    articlesHome: homeReducer,
  },
});

export default store;
