import React from "react";
import { useSelector } from "react-redux";
import "./../home/home.css"
import { Link } from "react-router-dom";
import { Nav, NavItem} from "reactstrap";




export default function NavCategory() {
 const mode=useSelector((state) => state.newTheme);
const {isNewTheme} = mode;
 return (
        <div className="mobile">
     <Nav justified className="border-bottom py-3">
  <NavItem>
    <Link to="/world" className={isNewTheme ? "a_default" : "a_new"}>
     World
     </Link>
  </NavItem>
  <NavItem >
  <Link to="/u.s" className={isNewTheme ? "a_default" : "a_new"}>
      U.S.
      </Link>
  </NavItem>
  <NavItem>
  <Link to="/new york" className={isNewTheme ? "a_default" : "a_new"}>
      N.Y
      </Link>
  </NavItem>
  <NavItem>
  <Link to="/business" className={isNewTheme ? "a_default" : "a_new"}>
      Business
      </Link>
  </NavItem>
  <NavItem >
  <Link to="/opinion" className={isNewTheme ? "a_default" : "a_new"}>
      Opinion
      </Link>
  </NavItem>
  <NavItem >
    <Link to="/science" className={isNewTheme ? "a_default" : "a_new"}>
      Science
      </Link>
  </NavItem>
  <NavItem>
    <Link to="/sports" className={isNewTheme ? "a_default" : "a_new"} >
      Sports
      </Link>
  </NavItem>
  <NavItem>
  <Link to="/arts" className={isNewTheme ? "a_default" : "a_new"} >
      Arts
      </Link>
  </NavItem>
  <NavItem>
  <Link to="/books" className={isNewTheme ? "a_default" : "a_new"} >
      Books
      </Link>
  </NavItem>
  <NavItem>
  <Link to="/food" className={isNewTheme ? "a_default" : "a_new"} >
      Food
      </Link>
  </NavItem>
  <NavItem>
  <Link to="/travel" className={isNewTheme ? "a_default" : "a_new"} >
      Travel
      </Link>
  </NavItem>
  <NavItem>
  <Link to="/technology" className={isNewTheme ? "a_default" : "a_new"} >
      Technology
      </Link>
  </NavItem>
</Nav>


       
            </div>
    );
}