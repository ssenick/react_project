import React from "react";
import s from "./Friend.module.scss";
import {NavLink} from "react-router-dom";

const Friend = (props) => {


   return (
      <NavLink to={props.to} className={s.friend}>
         <div className={s.friendAvatar}>
            <img src={props.src} alt="avatar"/>
         </div>
         <div className={s.friendName}>
            {props.name}
         </div>
      </NavLink>
   )
};
export default Friend;