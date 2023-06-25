import React, {useEffect, useState} from "react";
import imageTitle from "./../../Images/theNewYorkTimes_default.png";
import imageTitle2_0 from "./../../Images/theNewYorkTimes_20.png";
import { Row, Col, Container} from "reactstrap";
import "./header.css"
import Menu from "./Menu";
import { RiAccountCircleFill } from "react-icons/ri";
import {MdLightbulbOutline, MdLightbulb } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleNewTheme } from "../../features/redux/actions/newThemeAction";
import NavCategory from "./nav"
import Search from "./search/search";
import HeaderMobile from "./HeaderMobile";


export default function Header() {
  // status by screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.newTheme);
  const {isNewTheme} = mode;
// function switch theme
  const switchNewTheme = () => {
    isNewTheme ? dispatch(handleNewTheme(false)) : dispatch(handleNewTheme(true));
  };
  useEffect(() => {
    document.body.style.backgroundColor = isNewTheme ? "white" : "black";
  }, [isNewTheme]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const renderHeader = () => {
    if (isMobile) {
      return <HeaderMobile />;
    } else {
      return (
        <>
<Container fluid>
        <Row className="border-bottom my-3 py-2" >
    <Col
      className=" text-start" xs="2"
    ><Menu />
        </Col>
  <Col xs="2">
  <Search  />
  </Col>
    <Col
      className="text-center"
      sm="4"
      xs="2"
    >
        <Link to="/">
     {isNewTheme ? (
      <img src={imageTitle} 
      alt="The New York Times" 
      className="title" />
     ) : (
      <img src={imageTitle2_0} 
      alt="The New York Times 2.0" 
      className="title" />
     )}
      </Link>
    </Col>
    <Col xs="2">
    <div id="newTheme">
        <input type="checkbox" 
        className="checkbox" 
        id="checkbox"
        onChange={switchNewTheme}
        checked={isNewTheme} />
        <label htmlFor="checkbox" className="label" >
          <MdLightbulbOutline color="white" />
          <MdLightbulb color="white" />
          <div className="ball"></div>
        </label>
    </div>
      </Col>
      <Col>
      <Link to="/login" >
      <RiAccountCircleFill size={30} color={isNewTheme ? "black" : "white"} />
      </Link>
      </Col>
      </Row>
    <Row>
    <NavCategory />
</Row>
  </Container>
   </>
   );
  }}
  
  return renderHeader();
}