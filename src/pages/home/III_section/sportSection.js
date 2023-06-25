import React, {useEffect, useState} from "react";
import {Row, Container } from "reactstrap";
import "./../home.css"
import axios from "axios";
import SetArticlesII from "../components/setNewsII";
import Loading from "../../Loading";
import Error from "../../Error";

export default function SportSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [sport, setSports] = useState("");
  const [error, setError] = useState(false);
  const apiKey = process.env.REACT_APP_NYT_API_KEY;

  const SportData = async () => {
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${apiKey}`
      );
      setSports(res.data.results); 
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    SportData(); 
  },);

 return (
  <Container>
  {isLoading ? (
 <Loading />
) : (
 <>
 
   {sport.length > 0 ? (
     <Row className="border-top">
     <SetArticlesII article={sport} />  
     </Row>
   ) : (
     error && <Error />
   )}
 </>
)}
   </Container>

);
}

        