import React, { useState } from "react";
import { ImMenu } from "react-icons/im";
import { Button, Offcanvas, OffcanvasBody, Nav, NavItem, Row, Col } from 'reactstrap';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./menu.css"

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };
  const closeOffCanvas = () => {
    setIsOpen(false);
  };

  const mode = useSelector((state) => state.newTheme);
  const { isNewTheme } = mode;
    
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
    <Link to="/arts" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Arts
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/automobiles" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
      Automobiles
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/books" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Books
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/business" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
      Business
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/climate" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Climate
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/education" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Education
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/fashion" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Fashion
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/food" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
    Food
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/gameplay" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Gameplay
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/healt" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
    Health
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/home & garden" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Home & Garden
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/job market" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
    Job Market
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/the learning network" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     The learning Network
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/magazine" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
    Magazine
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/movies" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Movies
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/new york" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
    New York
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/opinion" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Opinion
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/podcasts" className={isNewTheme ? "a_default" : "a_new" } onClick={closeOffCanvas}>
    Podcasts
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/science" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Science
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/sports" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
    Sports
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/technology" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}> 
     Technology
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/theater" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
    Theater
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/travel" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Travel
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/u.s." className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
    U.S.
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/universal" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     Universal
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/well" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
    Well
      </Link>
  </NavItem></Col>
  </Row>
  <Row>
                <Col>
          <NavItem className="my-3">
    <Link to="/world" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
     World
     </Link>
  </NavItem>
  </Col>
  <Col>
  <NavItem className="my-3">
  <Link to="/your money" className={isNewTheme ? "a_default" : "a_new"} onClick={closeOffCanvas}>
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