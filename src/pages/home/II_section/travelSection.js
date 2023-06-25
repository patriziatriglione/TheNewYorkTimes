import React, {useEffect, useState} from "react";
import { Container } from "reactstrap";
import "./../home.css"
import axios from "axios";
import ColumnTwoArticles from "../components/twoArticlesColumn";
import Error from "../../Error";
import Loading from "../../Loading";

export default function TraveldSection() {
  const [isLoading, setIsLoading] = useState(true)
  const [travel, setTravel] = useState("");
  const [error, setError] = useState(false);

  const apiKey = process.env.REACT_APP_NYT_API_KEY;
  

  const TravelData = async () => {
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${apiKey}`
      );
      setTravel(res.data.results); 
      setIsLoading (false);
    } catch (error) {
      setError(true);
      setIsLoading(false)
    }
  };

  useEffect(() => {
    TravelData(); 
  },);
 return (
    <Container>
         {isLoading ? (
        <Loading />
      ) : (
        <>
          {travel.length > 0 ? (
            <>
            <ColumnTwoArticles firstArticle={travel[3]} secondArticle={travel[4]} />
            <ColumnTwoArticles firstArticle={travel[5]} secondArticle={travel[6]} />
            </>
          ) : (
            error && <Error />
          )}
        </>
      )}
          </Container>

    );
}