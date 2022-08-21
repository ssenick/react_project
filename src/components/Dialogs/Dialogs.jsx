import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>Igor</div>
            <div className={s.dialog}>Ira</div>
            <div className={s.dialog}>Alona</div>
            <div className={s.dialog}>Daniil</div>
            <div className={s.dialog}>Mama</div>
            <div className={s.dialog}>Papa</div>
         </div>
         <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How is your name?</div>
            <div className={s.message}>Dima ))</div>
         </div>
      </div>
   )
};

export default Dialogs;
