import React from "react";
import s from "./Aside.module.scss";
import NavContainer from "./Nav/NavContainer";
import FriendsContainer from "./Friends/FriendContainer";


const Aside = (props) => {
   return (
      <aside className={s.aside}>
         <NavContainer store={props.store}/>
         <FriendsContainer store={props.store}/>
      </aside>

   );
};

export default Aside;
