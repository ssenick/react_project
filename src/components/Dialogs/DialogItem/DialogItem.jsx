import React from "react";
import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.scss";


const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <NavLink to={path} className={s.dialog}>  {props.name}</NavLink>
   )
}

export default DialogItem;