import { NEW_THEME } from "../types";

// initil state
const initialState = {
    // status of the localstorage
    isNewTheme: !!JSON.parse(localStorage.getItem("newTheme"))
};

const newThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_THEME:
            return {
                ...state,
                isNewTheme:action.payload,
            };
            default:
                return state;
    }
};

export default newThemeReducer;