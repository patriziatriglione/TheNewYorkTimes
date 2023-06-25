import React from "react";
import {useSelector} from "react-redux";
import {Row, Container} from "reactstrap";
import "./../home.css"

// structure with various articles and a photo in column Section II 
export default function TitleColumnSectionII({articles}) {
      const mode=useSelector((state) => state.newTheme);
      const {isNewTheme} = mode;
      const listNews= articles.slice(6, 12);
    
     return (
    <Container>
              {listNews.map((article, index) => (
               <Row key={article.uri} 
               className={`mb-2 py-2 ${index !== listNews.length - 1 ? " border-bottom" : ""}`}>
              {article && (
                  <div>
                    <a href={article.url} 
                    target="_blanck"
                    className={isNewTheme ? "a_default" : "a_new"}>
              <h6><strong>{article.title}</strong></h6>
              </a>
              </div> )}
              </Row>
              ))}
        </Container>
        );
    }