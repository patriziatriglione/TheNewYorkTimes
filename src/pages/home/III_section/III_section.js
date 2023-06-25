import React, {useEffect} from "react";
import {useSelector, useDispatch  } from "react-redux";
import { ArticlesHome } from "../../../features/redux/actions/articlesHomeAction";
import { Row, Container } from "reactstrap";
import Loading from "../../Loading";
import SportSection from "./sportSection";
import FoodSection from "./foodSection"
import SpidermanSection from "./spidermanSection";
import "./../home.css"

export default function SectionII() {
  const dispatch = useDispatch();
  const { articlesHome, isLoading } = useSelector((state) => state.articlesHome);
console.log(articlesHome)
  useEffect(() => {
    dispatch(ArticlesHome());
  }, [dispatch]);

 return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
        <Row>
          <SpidermanSection />
        </Row>
    <Row className="border-top">
       <SportSection />
        </Row>
        <Row>
          <FoodSection />
        </Row>
    </>
     )}
     </Container>
   );
 }