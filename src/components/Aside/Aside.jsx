import React from "react";
import Nav from "./Nav/Nav";
import s from "./Aside.module.scss";
import Friends from "./Friends/Friends";


const Aside = (props) => {

   return (
      <aside className={s.aside}>
         <Nav navList={props.aside.navList}/>
         <Friends friends={props.aside.friends}/>
      </aside>

   );
};

export default Aside;
