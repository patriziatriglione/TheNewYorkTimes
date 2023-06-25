import React from "react";
import { useSelector } from "react-redux";
import { Col, Row, Container } from "reactstrap";
import "./../home.css";

export default function TwoArticles({ firstArticle, secondArticle }) {
  const mode = useSelector((state) => state.newTheme);
  const { isNewTheme } = mode;

  return (
    <Container>
      <Row className="my-3 border-bottom">
        <Col>
          {firstArticle && (
            <div className="border-bottom">
              <a
                href={firstArticle.url}
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}
              >
                <h4>
                  <strong>{firstArticle.title}</strong>
                </h4>
                <p>{firstArticle.abstract}</p>
              </a>
            </div>
          )}
          {secondArticle && (
            <div className="my-2">
              <a
                href={secondArticle.url}
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}
              >
                <h4>
                  <strong>{secondArticle.title}</strong>
                </h4>
                <p>{secondArticle.abstract}</p>
              </a>
            </div>
          )}
        </Col>
        <Col className="my-3">
          {secondArticle && secondArticle.multimedia.length > 1 && (
            <div>
              <img
                src={secondArticle.multimedia[1].url}
                alt={secondArticle.multimedia[1].caption}
                className="img-fluid"
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
