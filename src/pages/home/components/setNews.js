import React from "react";
import {useSelector} from "react-redux";
import { Col, Row, Container} from "reactstrap";
import "./../home.css"

// structure with various articles and a photo
export default function SetArticles({firstArticle, secondArticle, thirdArticle, fourthArticle}) {
  const mode=useSelector((state) => state.newTheme);
  const {isNewTheme} = mode;

 return (
<Container>
    <Row className="sectionUs my-3">
            <Col className="border-end">
            {firstArticle && (
              <div className="border-bottom my-1 py-3">
                <a href={firstArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
                    
          <h5><strong>{firstArticle.title}</strong></h5>
          <p>{firstArticle.abstract}</p>
          </a>
          </div> )}
          {secondArticle && (
              <div className="border-bottom my-1 py-3">
                <a href={secondArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <h5><strong>{secondArticle.title}</strong></h5>
          <p>{secondArticle.abstract}</p>
          </a>
          </div> )}
          {thirdArticle && (
             <div className="my-1 py-3">
                <a href={thirdArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <h5><strong>{thirdArticle.title}</strong></h5>
          <p>{thirdArticle.abstract}</p>
          </a>
          </div> )}
</Col>
          <Col className="border-end">  
          {fourthArticle && (
              <div>
                <a href={fourthArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
     <img
            src={fourthArticle.multimedia[1].url}
            className="my-3 img-fluid"
            alt={fourthArticle.multimedia[1].caption}
          />
          <h5><strong>{fourthArticle.title}</strong></h5>
          <p>{fourthArticle.abstract}</p>
          </a>
          </div>
        )}
  </Col>
    </Row>
    </Container>
    );
}