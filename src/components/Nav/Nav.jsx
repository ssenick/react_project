import React from "react";
import s from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <a href="src/components/Nav/Nav#" className={s.item}>
            Home
          </a>
        </li>
        <li>
          <a href="src/components/Nav/Nav#" className={s.item}>
            Profile
          </a>
        </li>
        <li>
          <a href="src/components/Nav/Nav#" className={s.item}>
            Contacts
          </a>
        </li>
        <li>
          <a href="src/components/Nav/Nav#" className={s.item}>
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
