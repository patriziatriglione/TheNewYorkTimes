import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import "./../home.css"
import axios from "axios";
import ColumnFourArticles from "../components/titleColumn";
import Error from "../../Error";
import Loading from "../../Loading";

// Opinion Section
export default function OpinionSection() {
  const [isLoading, setIsLoading] = useState(true)
  const [opinion, setOpinion] = useState("");
  const [error, setError] = useState(false);
  const apiKey = process.env.REACT_APP_NYT_API_KEY;
  const mode=useSelector((state) => state.newTheme);
  const {isNewTheme} = mode;

  const OpinionData = async () => {
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=${apiKey}`
      );
      setOpinion(res.data.results); 
      setIsLoading (false);
    } catch (error) {
      setError(true);
      setIsLoading(false)
    }
  };

  useEffect(() => {
    OpinionData(); 
  },);

 return (
    <Container>
         {isLoading ? (
        <Loading />
      ) : (
        <>
        <p className={`mt-3 ${isNewTheme ? "p.default" : "p_new"}`}>Opinion</p>
          {opinion.length > 0 ? (
            <>
            <ColumnFourArticles firstArticle={opinion[4]}
            secondArticle={opinion[5]}
            thirdArticle={opinion[6]}
            fourthArticle={opinion[7]} />
            <ColumnFourArticles firstArticle={opinion[8]}
            secondArticle={opinion[9]}
            thirdArticle={opinion[10]}
            fourthArticle={opinion[11]} />
            </>
          ) : (
            error && <Error />
          )}
        </>
      )}
      </Container>
      );
    }