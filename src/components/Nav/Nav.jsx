import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
   return (
      <nav className={s.nav}>
         <ul>
            <li>
               <a href="/profile" className={s.item}>
                  Profile
               </a>
            </li>
            <li>
               <a href="/dialogs" className={s.item}>
                  Messeges
               </a>
            </li>
            <li>
               <a href="/login" className={s.item}>
                  Login
               </a>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
