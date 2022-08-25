import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <NavLink to={path} className={s.dialog + ' ' + s.active}>{props.name}</NavLink>
   )
}

const Message = (props) => {
   return (
      <div className={s.message}>{props.text}</div>
   )
}

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name="Igor" id="1"/>
            <DialogItem name="Ira" id="2"/>
            <DialogItem name="Alona" id="3"/>
            <DialogItem name="Igor" id="4"/>
            <DialogItem name="Daniil" id="5"/>
            <DialogItem name="Mama" id="6"/>
            <NavLink to="/dialogs/1" className={s.dialog + ' ' + s.active}>Igor</NavLink>

         </div>
         <div className={s.messages}>
            <Message text="hi"/>
            <Message text="How is your name?"/>
            <Message text="Dima )"/>
         </div>
      </div>
   )
};

export default Dialogs;
