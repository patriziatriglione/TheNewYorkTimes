import React from "react";
import { Nav, NavItem, Container} from 'reactstrap';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MenuFooter() {

  // redux color
    const mode=useSelector((state) => state.newTheme);
    const {isNewTheme} = mode;

    return(
            <Container className="text-center"> 
                <Nav vertical>
  <NavItem className="my-1 mx-5">
  <Link to="/automobiles" className={isNewTheme ? "a_default" : "a_new"}>
      Automobiles
      </Link>
  </NavItem>
          <NavItem className="my-1 mx-5">
    <Link to="/climate" className={isNewTheme ? "a_default" : "a_new"}>
     Climate
     </Link>
  </NavItem>
  <NavItem className="my-1 mx-5">
  <Link to="/education" className={isNewTheme ? "a_default" : "a_new"}>
     Education
      </Link>
  </NavItem>
          <NavItem className="my-1 mx-5">
    <Link to="/fashion" className={isNewTheme ? "a_default" : "a_new"}>
     Fashion
     </Link>
  </NavItem>
          <NavItem className="my-1 mx-5">
    <Link to="/gameplay" className={isNewTheme ? "a_default" : "a_new"}>
     Gameplay
     </Link>
  </NavItem>
  <NavItem className="my-1 mx-5">
  <Link to="/healt" className={isNewTheme ? "a_default" : "a_new"}>
    Health
      </Link>
  </NavItem>
   <NavItem className="my-1 mx-5">
    <Link to="/home & garden" className={isNewTheme ? "a_default" : "a_new"}>
     Home & Garden
     </Link>
  </NavItem>
  <NavItem className="my-1 mx-5">
  <Link to="/job market" className={isNewTheme ? "a_default" : "a_new"}>
    Job Market
      </Link>
  </NavItem>
   <NavItem className="my-1 mx-5">
    <Link to="/the learning network" className={isNewTheme ? "a_default" : "a_new"}>
     The learning Network
     </Link>
  </NavItem>
  <NavItem className="my-1 mx-5">
  <Link to="/magazine" className={isNewTheme ? "a_default" : "a_new"}>
    Magazine
      </Link>
  </NavItem>
   <NavItem className="my-1 mx-5">
    <Link to="/movies" className={isNewTheme ? "a_default" : "a_new"}>
     Movies
     </Link>
  </NavItem>
  <NavItem className="my-1 mx-5">
  <Link to="/podcasts" className={isNewTheme ? "a_default" : "a_new"}>
    Podcasts
      </Link>
  </NavItem>
  <NavItem className="my-1 mx-5">
  <Link to="/theater" className={isNewTheme ? "a_default" : "a_new"}>
    Theater
      </Link>
  </NavItem>
          <NavItem className="my-1 mx-5">
    <Link to="/universal" className={isNewTheme ? "a_default" : "a_new"}>
     Universal
     </Link>
  </NavItem>
  <NavItem className="my-1 mx-5">
  <Link to="/well" className={isNewTheme ? "a_default" : "a_new"}>
    Well
      </Link>
  </NavItem>
  <NavItem className="my-1 mx-5">
  <Link to="/your money" className={isNewTheme ? "a_default" : "a_new"}>
    Your Money
      </Link>
  </NavItem>
  </Nav>
  </Container>
  );
}