import { combineReducers } from "@reduxjs/toolkit";
import newThemeReducer from "./newThemeReducer";

export default combineReducers({
    newTheme: newThemeReducer
});