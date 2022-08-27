import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
   let textarea = React.createRef();

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {props.dialogsPage.dialogsData
               .map((d, i) => <DialogItem key={i} name={d.name} id={d.id}/>)}
            {/*<NavLink to="/dialogs/1" className={s.dialog + ' ' + s.active}>Igor</NavLink>*/}
         </div>
         <div className={s.blockMessages}>
            <div className={s.messages}>
               {props.dialogsPage.messagesData
                  .map((m, i) => <Message key={i} text={m.message}/>)}
            </div>
            <div className={s.messageAction}>
               <textarea ref={textarea} className={s.messageTextarea}></textarea>
               <button onClick={() => alert(textarea.current.value !== '' ? textarea.current.value : 'Ops')}
                       className={s.messageBtn}>Send
               </button>
            </div>
         </div>
      </div>
   )
};
export default Dialogs;