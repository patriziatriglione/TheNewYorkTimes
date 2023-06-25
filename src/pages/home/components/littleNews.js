import React from "react";
import {useSelector} from "react-redux";
import {Row, Container, Col} from "reactstrap";
import "./../home.css"

// structure for the five news in a row
export default function LittleNews({articles}) {
  const mode=useSelector((state) => state.newTheme);
  const {isNewTheme} = mode;
  const listNews= articles.slice(0, 5);
  
  return (
    <Container>
            <Row className="my-3 border-bottom">
              {listNews.map((article, index) => (
               <Col key={article.uri} 
               className={`mb-2 ${index !== listNews.length - 1 ? " border-end" : ""}`}>
                {article && (
      <div>
         
              </div>)}
              {article && (
                  <div>
                    <a href={article.url} 
                    target="_blanck"
                    className={isNewTheme ? "a_default" : "a_new"}>
              <h6><strong>{article.title}</strong></h6>
              </a>
              </div> )}
              {article && article.multimedia && article.multimedia[2] && (
      <div>
         <img
                src={article.multimedia[1].url}
                alt={article.multimedia[1].caption}
                className="img-fluid my-2" 
              />
              </div>)}
              </Col>  
              ))}
               
     </Row>
        </Container>
        );
    }