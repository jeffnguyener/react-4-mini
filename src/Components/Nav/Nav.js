import React, { Component } from "react";
import logo from "./../../images/dm_white_logo.png";
import "./Nav.css";
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
          <img src={logo} alt="dm logo" />
        </div>
        <ul>
          <li><Link to='/' />Home</li>
          <li><Link to='/topics' />Topics</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
