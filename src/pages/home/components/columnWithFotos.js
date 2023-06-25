import React from "react";
import { useSelector } from "react-redux";
import "./../home.css";
import { Container, Row} from "reactstrap";

// column structure with article and photo
export default function ColumnFotos({article}) {
    const mode=useSelector((state) => state.newTheme);
    const {isNewTheme} = mode;

    return (
<Container>
        <Row className=" my-2 border-bottom">
            {article && (
  <div>
     <img   className="img-fluid"
            src={article.multimedia[1].url}
            alt={article.multimedia[2].caption
           }
          />
          </div>)}  
            {article && (
              <div className="mt-3">
                <a href={article.url} 
                target="_blanck"
                className={isNewTheme ? "a_default" : "a_new"}>
          <h5><strong>{article.title}</strong></h5>
          <p>{article.abstract}</p>
          </a>
          </div> )}
    </Row>
    </Container>
    );
}