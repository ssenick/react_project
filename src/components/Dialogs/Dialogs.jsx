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

   let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
   let messages = messagesData.map(m => <Message text={m.message}/>)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogs}
            {/*<NavLink to="/dialogs/1" className={s.dialog + ' ' + s.active}>Igor</NavLink>*/}
         </div>
         <div className={s.messages}>
            {messages}
         </div>
      </div>
   )
};

export default Dialogs;
