import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateMessageTextCreator} from "../../../redux/dialogs-reducer";

const Dialogs = (props) => {
   const dialogsItems = props.dialogsPage.dialogsData
      .map((d, i) => <DialogItem key={i} name={d.name} id={d.id}/>)
   const messagesItems = props.dialogsPage.messagesData
      .map((m, i) => <Message key={i} text={m.message}/>)
   let textarea = React.createRef();
   const onChangeArea = () => {
      props.dispatch(updateMessageTextCreator(textarea.current.value))
   }
   const onClickBtn = () => {
      props.dispatch(sendMessageCreator());
   }


   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsItems}
         </div>
         <div className={s.blockMessages}>
            <div className={s.messages}>
               {messagesItems}
            </div>
            <div className={s.messageAction}>
               <textarea onChange={() => onChangeArea()} ref={textarea} value={props.dialogsPage.textArea}
                         className={s.messageTextarea}></textarea>
               <button onClick={() => onClickBtn()} className={s.messageBtn}>Send</button>
            </div>
         </div>
      </div>
   )
};
export default Dialogs;