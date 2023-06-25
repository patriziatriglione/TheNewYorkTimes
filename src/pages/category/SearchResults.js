import React from "react";
import { useSelector } from "react-redux";
import SearchComponents from "./componentsCategory/searchComponent";
import Loading from "../Loading";
import Error from "../Error";

export default function SearchResults() {
  // Access the articles search from Redux store
  const isLoading = useSelector((state) => state.articleSearch.isLoading);
  const error = useSelector((state) => state.articleSearch.error);
  const articlesSearch = useSelector((state) => state.articleSearch.articlesSearch);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {articlesSearch.length > 0 ? (
            <SearchComponents articlesSearch={articlesSearch} />
          ) : (
            error && <Error />
          )}
        </>
      )}
    </div>
  );
          }