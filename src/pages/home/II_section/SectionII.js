import React, {useEffect} from "react";
import {useSelector, useDispatch  } from "react-redux";
import { ArticlesHome } from "../../../features/redux/actions/articlesHomeAction";
import { Col, Row, Container } from "reactstrap";
import SetArticles from "../components/setNews";
import ArticleTwoSection from "../components/articleTwoSection";
import Loading from "../../Loading";
import WellSection from "./wellSection";
import WorldSection from "./wolrdSection";
import TraveldSection from "./travelSection";
import "./../home.css"

export default function SectionII() {
  const dispatch = useDispatch();
  const { articlesHome, isLoading } = useSelector((state) => state.articlesHome);
  useEffect(() => {
    dispatch(ArticlesHome());
  }, [dispatch]);

 return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
    <Row className="border-top">
        <Col md="9">
            <SetArticles firstArticle={articlesHome[17] }
            secondArticle= {articlesHome[18]}
            thirdArticle = {articlesHome[19]}
            fourthArticle= {articlesHome[20]}
          /> 
        </Col>
        <Col xs="3">
        <WorldSection />
        </Col>
        </Row>
        <WellSection />
        <Row>
            <Col md="9">
            <ArticleTwoSection article={articlesHome[21]} />
            </Col>
            <Col xs="3">
            <TraveldSection />
            </Col>
        </Row>
        <Row>

        </Row>
    </>
     )}
     </Container>
   );
 }