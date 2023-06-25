import React from "react";
import { useSelector } from "react-redux";
import "./../home.css";
import { Container, Row, Col } from "reactstrap";
// structure two articles with two photos in column
export default function ColumnTwoArticles({firstArticle, secondArticle}) {
    const mode=useSelector((state) => state.newTheme);
    const {isNewTheme} = mode;
    
    return (
<Container>
        <Row className="my-1">
            <Col className="border-end" xs="6">      
            {firstArticle && (
  <div className="my-3">
     <img className="img-fluid"
            src={firstArticle.multimedia[2].url}
            alt={firstArticle.multimedia[2].caption}
          />
          </div>)} 
            {firstArticle && (
              <div>
                <a href={firstArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <p><strong>{firstArticle.title}</strong></p>
          </a>
          </div> )}
    </Col>
          <Col xs="6">
            {secondArticle && (
  <div className="my-3">
     <img className="img-fluid"
            src={secondArticle.multimedia[2].url}
            alt={secondArticle.multimedia[2].caption}
          />
          </div>)}   
          {secondArticle && (
              <div className="my-3">
                <a href={secondArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <p><strong>{secondArticle.title}</strong></p>
          </a>
          </div> )}
           
      </Col>

    </Row>
    </Container>
    );
}