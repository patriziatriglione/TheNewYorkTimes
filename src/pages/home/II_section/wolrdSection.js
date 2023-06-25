import React, {useEffect, useState} from "react";
import { Container } from "reactstrap";
import "./../home.css"
import axios from "axios";
import TitleColumnSectionII from "../components/titleColumnSectionII";
import Error from "../../Error";
import Loading from "../../Loading";

export default function WorldSection() {
  const [isLoading, setIsLoading] = useState(true)
  const [world, setWorld] = useState("");
  const [error, setError] = useState(false);

  const apiKey = process.env.REACT_APP_NYT_API_KEY;
 

  const WorldData = async () => {
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`
      );
      setWorld(res.data.results); 
      setIsLoading (false);
    } catch (error) {
      setError(true);
      setIsLoading(false)
    }
  };

  useEffect(() => {
    WorldData(); 
  },);
 return (
    <Container>
         {isLoading ? (
        <Loading />
      ) : (
        <>
          {world.length > 0 ? (
            
            <TitleColumnSectionII articles={world} />
          ) : (
            error && <Error />
          )}
        </>
      )}
          </Container>

    );
}