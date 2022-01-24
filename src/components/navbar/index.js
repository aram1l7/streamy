import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Oauth from "../Oauth";
function Navbar() {
  return (
    <nav className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/streams/show" className="item">
          All streams
        </Link>
        <Oauth />
      </div>
    </nav>
  );
}

export default Navbar;
