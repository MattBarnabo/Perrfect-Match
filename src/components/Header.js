import React from "react";
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"
import Logo from "./../assets/Logos/pmlsmall.png"

const Header = () => {
  return (
    <Nav className= "me-auto">
      <div>
        <NavLink to="/">
          <img
            src= {Logo}
            alt= "logo of cat with heart in a circle"
            className= "perrfect-match-logo"
          />
          </NavLink>
      </div>
      <div className= "header-nav-link">
        <NavLink to= "/cat-new" className= "nav-link" >
          Add a Cat
        </NavLink>
        <a
        href="https://purrfectmatchcatrescue.org/donate?gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQAX3HmXgZ5a_mRYW6YEAA4mYh44P2QuiMWTrwcTPVgpTZUHPIvPuP8hoCtswQAvD_Bw"
        target= "blank"
        className= "nav-link"
        >
          Adopt a Cat
        </a>
        <NavLink className= "nav-link" to= "/cat-index">
          Meet your Perrfect Match
        </NavLink>
      </div>
    </Nav>
  );
}

export default Header;