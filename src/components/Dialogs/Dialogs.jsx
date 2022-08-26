import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
   let dialogs = props.dialogsPage.dialogsData
      .map((d, i) => <DialogItem key={i} name={d.name} id={d.id}/>);
   let messages = props.dialogsPage.messagesData
      .map((m, i) => <Message key={i} text={m.message}/>)

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