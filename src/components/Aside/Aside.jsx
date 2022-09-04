import React from "react";
import s from "./Aside.module.scss";
import NavContainer from "./Nav/NavContainer";
import store from "../../redux/store";
import FriendsContainer from "./Friends/FriendContainer";


const Aside = (props) => {
   return (
      <aside className={s.aside}>
         <NavContainer store={store}/>
         <FriendsContainer store={store}/>
         {/*<Nav navList={props.aside.navList}/>*/}
         {/*<Friends friends={props.aside.friends}/>*/}
      </aside>

   );
};

export default Aside;
