import React from "react";
import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.scss";

const opacity = ({isActive}) => ({opacity: isActive ? 1 : ""});

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <NavLink to={path} style={opacity} className={s.dialog}><img
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"
         alt="icon"/> <span>{props.name}</span> </NavLink>
   )
}

export default DialogItem;