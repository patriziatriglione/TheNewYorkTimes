import React from "react";
import {useSelector} from "react-redux";
import {Row, Container} from "reactstrap";
import "./../home.css"

// outline for an article with photos in section two
export default function ArticleTwoSection({article}) {
  const mode=useSelector((state) => state.newTheme);
  const {isNewTheme} = mode;
  
 return (
<Container>
        <Row className="my-3">
            {article && (
  <div className="my-3">
     <img
            src={article.multimedia[0].url}
            alt={article.multimedia[0].caption}
            className="img-fluid"
            />
          </div>)}   
            {article && (
              <div>
                <a href={article.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <h4><strong>{article.title}</strong></h4>
          <p>{article.abstract}</p>
          </a>
          </div> )}
  

    </Row>
    </Container>
    );
}