import React from "react";
import s from "./Nav.module.css";
import {Link} from "react-router-dom";

const Nav = () => {
   return (
      <nav className={s.nav}>
         <ul>
            <li>
               <Link to="/profile" className={s.item}>
                  Profile
               </Link>
            </li>
            <li>
               <Link to="/dialogs" className={s.item}>
                  Messeges
               </Link>
            </li>
            <li>
               <Link to="/login" className={s.item}>
                  Login
               </Link>
            </li>
         </ul>
      </nav>

   );
};

export default Nav;
