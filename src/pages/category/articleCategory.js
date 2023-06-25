import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../features/redux/actions/articlesAction"; // Import the fetchData action
import { useParams } from "react-router-dom";
import "./../home/home.css";
import Loading from "../Loading";
import { getArticlesSuccess } from "../../features/redux/actions/articlesAction";
import Error from "../Error";
import ArticleComponent from "./componentsCategory/articleComponent";

export default function ArticleCategory() {
  const dispatch = useDispatch();
  // Access the articles state from Redux store
  const { articles, isLoading, error } = useSelector((state) => state.articleState); 

  const { section } = useParams();
  useEffect(() => {
    // Extract the section from the URL
    const section = window.location.pathname.replace("/", ""); 
    dispatch(fetchData(section)); 
    return () => {
      dispatch(getArticlesSuccess([]));
    };
  }, [dispatch, section]);
 

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {articles.length > 0 ? (
            <ArticleComponent articles={articles} />
          ) : (
            error && <Error />
          )}
        </>
      )}
    </div>
  );
}
