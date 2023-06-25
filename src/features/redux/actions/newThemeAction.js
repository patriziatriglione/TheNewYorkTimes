import { NEW_THEME } from "../types";

export const handleNewTheme = (e) => (dispatch) => {
    const newThemeValue= JSON.stringify(e);
    // save to localstorage
    localStorage.setItem("newTheme", newThemeValue);
    
// dispatch data to reducer
    dispatch({
        type: NEW_THEME,
        payload: e,
    });
};