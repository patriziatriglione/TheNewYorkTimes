import React from "react";
import { useSelector } from "react-redux";
import { Row, Container, Col } from "reactstrap";
import "./../../home/home.css";

//function that fetches articles from the "SearchResults" and displays the results
export default function SearchComponents({ articlesSearch }) {

  // state to change color
  const mode = useSelector((state) => state.newTheme);
  const { isNewTheme } = mode;

  
  return (
    <Container>
       {Array.isArray(articlesSearch) && articlesSearch.map((article, index) => (
        <Row key={article.uri} className={`my-3 ${index !== articlesSearch.length - 1 ? " border-bottom" : ""}`}>
          <Col >
            {article && (
              <div className="my-5">
                <a href={article.web_url} target="_blanck" className={isNewTheme ? "a_default" : "a_new"}>
                  <p>{article.news_desk} - {article.subsection_name}</p>
                  <h5>
                    <strong>{article.headline.main}</strong>
                  </h5>
                  <p>{article.abstract}</p>
                </a>
              </div>
            )}
          </Col>
          <Col>
            {article && article.multimedia && article.multimedia[2] && (
              <div>
              <img src={"https://www.nytimes.com/" + article.multimedia[2].url} alt={article.multimedia[0].caption} className="img-fluid my-2" />

              </div>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
}
