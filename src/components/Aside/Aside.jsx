import React from "react";
import s from "./Aside.module.scss";
import NavContainer from "./Nav/NavContainer";
import FriendsContainer from "./Friends/FriendContainer";


const Aside = () => {
   return (
      <aside className={s.aside}>
         <NavContainer/>
         <FriendsContainer/>
      </aside>

   );
};

export default Aside;
