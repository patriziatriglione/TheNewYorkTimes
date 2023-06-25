import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ArticlesHome } from "../../../features/redux/actions/articlesHomeAction";
import { Col, Row, Container } from "reactstrap";
import Loading from "../../Loading";
import TwoArticles from "../components/twoArticle";
import Article from "../components/article";
import ColumnFotos from "../components/columnWithFotos";
import ColumnTwoArticles from "../components/twoArticlesColumn";
import OpinionSection from "./opinionColumn";
import { RiChatQuoteFill} from "react-icons/ri";

export default function SectionI() {
  // articles Redux
  const { articlesHome, isLoading } = useSelector((state) => state.articlesHome);
const dispatch = useDispatch();
// color Redux
const mode=useSelector((state) => state.newTheme);
  const {isNewTheme} = mode;
  useEffect(() => {
    dispatch(ArticlesHome());
  }, [dispatch]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <Row>
          <Col md="9">
            <TwoArticles firstArticle={articlesHome[0]} secondArticle={articlesHome[1]} />
            <TwoArticles firstArticle={articlesHome[2]} secondArticle={articlesHome[3]} />
            <Article article={articlesHome[4]} />
            <Article article={articlesHome[5]} />
            <Article article={articlesHome[6]} />
            <Article article={articlesHome[7]} />
            <Article article={articlesHome[8]} />
            <Article article={articlesHome[9]} />
            <Article article={articlesHome[10]} />
            <TwoArticles firstArticle={articlesHome[11]} secondArticle={articlesHome[12]} />
          </Col>
          <Col xs="3" className="mobile">
          <ColumnFotos article={articlesHome[13]} />
          <ColumnTwoArticles firstArticle={articlesHome[14]} secondArticle={articlesHome[15]} />
          <ColumnFotos article={articlesHome[16]} />
          <OpinionSection />
          </Col>
          <Row className="py-2">
          
          <figure className="text-center">
  <blockquote className="blockquote">  
  <RiChatQuoteFill className={`m-2 ${isNewTheme ? "p.default" : "p_new"}`} />
  <p className={`${isNewTheme ? "p.default" : "p_new"}`}>With great power comes great responsibility.</p>
  </blockquote>
</figure>
          </Row>
        </Row>

      )}
    </Container>
  );
}

