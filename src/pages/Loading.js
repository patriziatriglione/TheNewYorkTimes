import React from "react";
import "./loading.css"
import { useSelector } from "react-redux";

export default function Loading () {
    const mode=useSelector((state) => state.newTheme);
    const {isNewTheme} = mode;
    
    return (
        <div className={`mt-5 ${isNewTheme ? "loader" : "loader_new"}`}></div>
    );
}