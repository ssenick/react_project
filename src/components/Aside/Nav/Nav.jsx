import React from "react";
import s from "./Nav.module.scss";
import {NavLink} from "react-router-dom";

const color = ({isActive}) => ({opacity: isActive ? 1 : ""});

const Nav = (props) => {
   return (
      <nav className={s.nav}>
         <ul>
            {props.navList.map((item, index) => {
               return <li key={index}>
                  <NavLink to={item.to} style={color} className={s.item}>
                     {item.nameLink}
                  </NavLink>
               </li>
            })}

         </ul>
      </nav>

   );
};

export default Nav;
