import React from "react";
import {sendMessageCreator, updateMessageTextCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

   const onChangeArea = (text) => {
      props.store.dispatch(updateMessageTextCreator(text))
   }
   const onClickBtn = () => {
      props.store.dispatch(sendMessageCreator());
   }


   return <Dialogs dialogsData={props.store.getState().dialogsPage.dialogsData}
                   messagesData={props.store.getState().dialogsPage.messagesData}
                   textArea={props.store.getState().dialogsPage.textArea}
                   onChangeArea={onChangeArea}
                   onClickBtn={onClickBtn}
   />
};
export default DialogsContainer;