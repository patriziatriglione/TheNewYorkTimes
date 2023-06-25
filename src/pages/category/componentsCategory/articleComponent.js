import React from "react";
import { useSelector } from "react-redux";
import { Row, Container, Col } from "reactstrap";
import "./../../home/home.css";

export default function ArticleComponent({ articles }) {
  const mode = useSelector((state) => state.newTheme);
  const { isNewTheme } = mode;

  return (
    <Container>
      {Array.isArray(articles) &&
        articles.map((article, index) => (
          <Row
            key={article.uri}
            className={`my-3 ${
              index !== articles.length - 1 ? " border-bottom" : ""
            }`}
          >
            <Col>
              {article && (
                <div className="my-5">
                  <a
                    href={article.url}
                    target="_blanck"
                    className={isNewTheme ? "a_default" : "a_new"}
                  >
                    <h6>
                      <strong>{article.title}</strong>
                    </h6>
                    <p>{article.abstract}</p>
                  </a>
                </div>
              )}
            </Col>
            <Col>
              {article && article.multimedia && article.multimedia[2] && (
                <div>
                  <img
                    src={article.multimedia[2].url}
                    alt={article.multimedia[2].caption}
                    className="img-fluid my-2"
                  />
                </div>
              )}
            </Col>
          </Row>
        ))}
    </Container>
  );
}
