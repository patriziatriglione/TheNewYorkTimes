import React from "react";
import "./footer.css"
import { useSelector } from "react-redux";

export default function Copyright() {
    const mode=useSelector((state) => state.newTheme);
    const {isNewTheme} = mode;
    return (
        <div className={isNewTheme ? "footer" : "footer_new"}>
        <p >
        © 2023 Patrizia Triglione | The New York Times 2.0 | API The New York Times 
        </p>
        </div>
    );
}