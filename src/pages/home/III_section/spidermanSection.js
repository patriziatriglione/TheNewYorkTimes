import React from "react";
import {useSelector} from "react-redux";
import {Row, Container} from "reactstrap";
import Spiderman from "./../../../Images/spiderman.jpg";
import "./../home.css"

export default function SpidermanSection() {
 
  const mode=useSelector((state) => state.newTheme);
  const {isNewTheme} = mode;
 return (
<Container className={`text-center mt-4 ${isNewTheme ? "p.default" : "p_new"}`}>
        <Row className="my-3">
  <div className="my-3">
     <img
            src= {Spiderman}
            alt= "spiderman"
            className="img-fluid"
            />
          </div> 
              <div>
          <h4><strong>Who is Spider-Man?</strong></h4>
          </div>
  

    </Row>
    </Container>
    );
}