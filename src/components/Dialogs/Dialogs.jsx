import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <NavLink to="/dialogs/1" className={s.dialog + ' ' + s.active}>Igor</NavLink>
            <NavLink to="/dialogs/2" className={s.dialog}>Ira</NavLink>
            <NavLink to="/dialogs/3" className={s.dialog}>Alona</NavLink>
            <NavLink to="/dialogs/4" className={s.dialog}>Daniil</NavLink>
            <NavLink to="/dialogs/5" className={s.dialog}>Mama</NavLink>
            <NavLink to="/dialogs/6" className={s.dialog}>Papa</NavLink>
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
