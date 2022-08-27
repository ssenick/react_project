import React from "react";
import h from "./Header.module.scss";

const Header = () => {
   return (
      <header className={h.header}>
         <div className={h.logo}>
            <img
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
               alt=""/>
         </div>
         <div className={h.info}>
            <span>Social APP</span>
         </div>

      </header>
   );
};
export default Header;
