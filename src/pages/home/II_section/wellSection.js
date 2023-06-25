import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import "./../home.css"
import axios from "axios";
import LittleNews from "../components/littleNews";
import Error from "../../Error";
import Loading from "../../Loading";

// Well
export default function WellSection() {
  const [isLoading, setIsLoading] = useState(true)
  const [well, setWell] = useState("");
  const [error, setError] = useState(false);
  const apiKey = process.env.REACT_APP_NYT_API_KEY;
  const mode=useSelector((state) => state.newTheme);
  const {isNewTheme} = mode;
const WellData = async () => {
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/well.json?api-key=${apiKey}`
      );
      setWell(res.data.results); 
      setIsLoading (false);
    } catch (error) {
      setError(true);
      setIsLoading(false)
    }
  };
  useEffect(() => {
    WellData(); 
  },);

 return (
    <Container className="border-top">
         {isLoading ? (
        <Loading />
      ) : (
        <>
        <p className={`mt-3 ${isNewTheme ? "p.default" : "p_new"}`}>Well</p>
          {well.length > 0 ? (
          <LittleNews articles={well} />
          ) : (
            error && <Error />
          )}
        </>
      )}
       </Container>
       );
      }

