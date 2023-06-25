import React from "react";
import { useSelector } from "react-redux";
import "./../home.css";
import { Container, Row, Col } from "reactstrap";

// structure with various articles and a photo in column
export default function ColumnFourArticles({firstArticle, secondArticle, thirdArticle, fourthArticle}) {
  const mode=useSelector((state) => state.newTheme);
    const {isNewTheme} = mode;

  return (
<Container>
        <Row className="sectionUs my-3 border-bottom py-2">
            {firstArticle && (
              <div>
                <a href={firstArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
                    <p>{firstArticle.kicker}</p>
          <h6><strong>{firstArticle.title}</strong></h6>
          </a>
          </div> )}
          </Row>
          <Row className="sectionUs my-3 border-bottom py-2">
          {secondArticle && (
              <div>
                <a href={secondArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
                    <p>{secondArticle.kicker}</p>
          <h6><strong>{secondArticle.title}</strong></h6>
          </a>
          </div> )}
          {secondArticle && (
  <div>
     <img
            src={secondArticle.multimedia[0].url}
            alt={secondArticle.multimedia[0].caption}
            className="img-fluid"
          />
          </div>)} 
          </Row>
          <Row className="sectionUs my-3 border-bottom py-2">
          {thirdArticle && (
              <div>
                <a href={thirdArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
                    <p>{thirdArticle.kicker}</p>  
          <h6><strong>{thirdArticle.title}</strong></h6>
          </a>
          </div> )}
          </Row>
          <Row className="sectionUs my-3 py-2">
            <Col>
          {fourthArticle && (
              <div>
                <a href={fourthArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
                    <p>{fourthArticle.kicker}</p>
          <h6><strong>{fourthArticle.title}</strong></h6>
          </a>
          </div> )}
          </Col>
      </Row>
    </Container>
    );
}