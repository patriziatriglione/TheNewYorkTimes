import React from "react";
import { useSelector } from "react-redux";
import "./../home.css";
import { Container, Row} from "reactstrap";

export default function Title({article}) {
    const mode=useSelector((state) => state.newTheme);
    const {isNewTheme} = mode;

    const firstArticle= article[3];
    
    return (
<Container>
        <Row className="sectionUs my-3 border-top">
            {firstArticle && (
              <div className="my-3">
                <a href={firstArticle.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
                    <p>{firstArticle.material_type_facet} - {firstArticle.section}</p>
          <h6><strong>{firstArticle.title}</strong></h6>
          </a>
          </div> )}
    </Row>
    </Container>
    );
}