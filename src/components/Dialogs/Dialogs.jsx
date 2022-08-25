import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <NavLink to={path} className={s.dialog}>{props.name}</NavLink>
   )
}

const Message = (props) => {
   return (
      <div className={s.message}>{props.text}</div>
   )
}

const Dialogs = () => {

   let dialogsData = [
      {id: 1, name: 'Igor'},
      {id: 2, name: 'Ira'},
      {id: 3, name: 'Alona'},
      {id: 4, name: 'Igor'},
      {id: 5, name: 'Daniil'},
      {id: 6, name: 'Mama'},
   ]
   let messagesData = [
      {id: 1, message: 'hi'},
      {id: 2, message: 'How is your name?'},
      {id: 3, message: 'Dima )'},
   ]
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            <DialogItem name="Alona" id="3"/>
            <DialogItem name="Igor" id="4"/>
            <DialogItem name="Daniil" id="5"/>
            <DialogItem name="Mama" id="6"/>
            <NavLink to="/dialogs/1" className={s.dialog + ' ' + s.active}>Igor</NavLink>

         </div>
         <div className={s.messages}>
            <Message text={messagesData[0].message}/>
            <Message text={messagesData[1].message}/>
            <Message text={messagesData[2].message}/>
         </div>
      </div>
   )
};

export default Dialogs;
