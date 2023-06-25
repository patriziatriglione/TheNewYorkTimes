import React from "react";
import {useSelector} from "react-redux";
import {Row, Container, Col} from "reactstrap";
import "./../home.css"

export default function LittleNewsColumn({articles}) {
     
      const mode=useSelector((state) => state.newTheme);
      const {isNewTheme} = mode;
    
    const listNews= articles.slice(6, 11);
    
     return (
    <Container>
              {listNews.map((article, index) => (
               <Row key={article.uri} 
               className={`mb-2 ${index !== listNews.length - 1 ? " border-bottom" : ""}`}>
                <Col className="my-2">
              {article && (
                  <div>
                    <a href={article.url} 
                    target="_blanck"
                    className={isNewTheme ? "a_default" : "a_new"}>
              <h6><strong>{article.title}</strong></h6>
              </a>
              </div> )}
              </Col>
              <Col>
              {article && (
      <div>
         <img
                src={article.multimedia[0].url}
                alt={article.multimedia[0].caption}
                className="img-fluid my-2" 
              />
              </div>)}
              </Col>
              </Row>
              ))}
        </Container>
        );
    }