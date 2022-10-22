import React from "react";
import "./item.css";
import {NavLink} from 'react-router-dom'

const item = (props) => {
  return (
    <li className="NavigationItem">
      <NavLink onClick={props.clicked} to={props.to} exact>{props.children}</NavLink>
    </li>
  );
};

export default item;
