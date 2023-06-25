import React from "react";
import {useSelector} from "react-redux";
import { Col, Row, Container} from "reactstrap";
import "./../home.css"

// structure for an article with photos
export default function Article({article}) {
  const mode=useSelector((state) => state.newTheme);
  const {isNewTheme} = mode;
  
 return (
<Container>
        <Row className="my-3 border-bottom">
            <Col className="my-3">
            {article && (
              <div>
                <a href={article.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <h4><strong>{article.title}</strong></h4>
          <p>{article.abstract}</p>
          </a>
          </div> )}
          </Col>
          <Col className="my-3" >
{article && (
  <div>
     <img
            src={article.multimedia[1].url}
            alt={article.multimedia[1].caption}
            className="img-fluid"
          />
          </div>)}     
      </Col>

    </Row>
    </Container>
    );
}