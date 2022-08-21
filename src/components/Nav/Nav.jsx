import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const color = ({isActive}) => ({color: isActive ? 'red' : ""});

const Nav = () => {
   return (
      <nav className={s.nav}>
         <ul>
            <li>
               <NavLink to="/profile" style={color} className={s.item}>
                  Profile
               </NavLink>
            </li>
            <li>
               <NavLink to="/dialogs" style={color} className={s.item}>
                  Messeges
               </NavLink>
            </li>
            <li>
               <NavLink to="/login" style={color} className={s.item}>
                  Login
               </NavLink>
            </li>
         </ul>
      </nav>

   );
};

export default Nav;
