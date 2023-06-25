import React from "react";
import { useSelector } from "react-redux";
import "./home/home.css"

export default function Error() {
    const mode=useSelector((state) => state.newTheme);
  const {isNewTheme} = mode;
  
    return (
        <div className="m-5" >
        <h1 className={isNewTheme ? "p_default" : "p_new"}>Oops! The page/article doesn't exist or our enemies have removed it!</h1>
        </div>
    );
}