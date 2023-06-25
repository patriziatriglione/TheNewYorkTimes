import React, {useState} from "react";
import { ImMenu } from "react-icons/im";
import { Button, Offcanvas, OffcanvasBody, Nav, NavItem, Row, Col} from 'reactstrap';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./menu.css"

export default function Menu() {
      // status for opening/closing the menu
    const [isOpen, setIsOpen] = useState(false);
    const toggleOffCanvas = () => {
        setIsOpen(!isOpen);
    };

    const mode=useSelector((state) => state.newTheme);
    const {isNewTheme} = mode;
    return(
        <div>
        <Button
        size="lg"
        color="trasparent"
          onClick={toggleOffCanvas}>
          <ImMenu color={isNewTheme ? "black" : "white"} size={30} />
        </Button>
        <Offcanvas isOpen={isOpen} toggle={toggleOffCanvas}>
          <OffcanvasBody className={isNewTheme ? "menu_body" : "menu_body_new"}>
          <Nav vertical>
          <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/arts" className={isNewTheme ? "a_default" : "a_new"}>
     Arts
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/automobiles" className={isNewTheme ? "a_default" : "a_new"}>
      Automobiles
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/books" className={isNewTheme ? "a_default" : "a_new"}>
     Books
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/business" className={isNewTheme ? "a_default" : "a_new"}>
      Business
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/climate" className={isNewTheme ? "a_default" : "a_new"}>
     Climate
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/education" className={isNewTheme ? "a_default" : "a_new"}>
     Education
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/fashion" className={isNewTheme ? "a_default" : "a_new"}>
     Fashion
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/food" className={isNewTheme ? "a_default" : "a_new"}>
    Food
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/gameplay" className={isNewTheme ? "a_default" : "a_new"}>
     Gameplay
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/healt" className={isNewTheme ? "a_default" : "a_new"}>
    Health
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/home & garden" className={isNewTheme ? "a_default" : "a_new"}>
     Home & Garden
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/job market" className={isNewTheme ? "a_default" : "a_new"}>
    Job Market
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/the learning network" className={isNewTheme ? "a_default" : "a_new"}>
     The learning Network
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/magazine" className={isNewTheme ? "a_default" : "a_new"}>
    Magazine
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/movies" className={isNewTheme ? "a_default" : "a_new"}>
     Movies
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/new york" className={isNewTheme ? "a_default" : "a_new"}>
    New York
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/opinion" className={isNewTheme ? "a_default" : "a_new"}>
     Opinion
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/podcasts" className={isNewTheme ? "a_default" : "a_new"}>
    Podcasts
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/science" className={isNewTheme ? "a_default" : "a_new"}>
     Science
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/sports" className={isNewTheme ? "a_default" : "a_new"}>
    Sports
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/technology" className={isNewTheme ? "a_default" : "a_new"}>
     Technology
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/theater" className={isNewTheme ? "a_default" : "a_new"}>
    Theater
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/travel" className={isNewTheme ? "a_default" : "a_new"}>
     Travel
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/u.s." className={isNewTheme ? "a_default" : "a_new"}>
    U.S.
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/universal" className={isNewTheme ? "a_default" : "a_new"}>
     Universal
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/well" className={isNewTheme ? "a_default" : "a_new"}>
    Well
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/world" className={isNewTheme ? "a_default" : "a_new"}>
     World
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/your money" className={isNewTheme ? "a_default" : "a_new"}>
    Your Money
      </Link>
  </NavItem></Col>
  </Row>
            
</Nav>
          
            </OffcanvasBody>
        </Offcanvas>
      </div>
    );
}