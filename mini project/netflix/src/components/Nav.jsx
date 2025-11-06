import React from "react";
import "./nav.css";

function Nav(props) {
  return (
    <div>
      <nav>
        <a href="#" className="active">
          {props.linkName}
        </a>
      </nav>
    </div>
  );
}

export default Nav;