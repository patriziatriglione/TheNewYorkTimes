import React from "react";
import {useSelector} from "react-redux";
import { Col, Row, Container} from "reactstrap";
import "./../home.css"

export default function SetArticlesII({article}) {
 
  const mode=useSelector((state) => state.newTheme);
  const {isNewTheme} = mode;

const firstArticle= article[0]; 
const secondArticle= article[1]; 
const thirdArticle= article[2]; 
const fourthArticle= article[3]; 
const fifththArticle= article[4]; 
const sixthArticle= article[5]; 


 return (
<Container>
    <Row className="sectionUs my-3">
            <Col>
            {firstArticle && (
              <div className="border-bottom my-1 py-3">
                <a href={firstArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
                <h5><strong>{firstArticle.title}</strong></h5>
          </a>
          </div> )}
          {secondArticle && (
              <div className=" py-3 m-2 ">
                <a href={secondArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <h5><strong>{secondArticle.title}</strong></h5>
          </a>
          </div> )}
          </Col>
          <Col className="border-end">
          {secondArticle && (
              <div>
                <a href={secondArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
     <img
            src={secondArticle.multimedia[2].url}
            className=" img-fluid mobile"
            alt={secondArticle.multimedia[2].caption}
          />
          </a>
          </div>
        )}
          </Col>
          <Col className="border-end">
          {thirdArticle && (
             <div className="m-3 py-3">
                <a href={thirdArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <h5><strong>{thirdArticle.title}</strong></h5>
          <p>{thirdArticle.abstract}</p>
          </a>
          </div> )}
</Col>
          <Col>  
          {fourthArticle && (
              <div className="border-bottom m-3">
                <a href={fourthArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <h5><strong>{fourthArticle.title}</strong></h5>
          </a>
          </div>
          )}
          {fifththArticle && (
              <div className="border-bottom m-3">
                <a href={fifththArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <h5><strong>{fifththArticle.title}</strong></h5>
          </a>
          </div>
          )}
          {sixthArticle && (
              <div className="m-3">
                <a href={sixthArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <h5><strong>{sixthArticle.title}</strong></h5>
          </a>
          </div>
          )}

  </Col>
    </Row>
    </Container>
    );
}