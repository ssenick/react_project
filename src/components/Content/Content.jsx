import React from "react";
import "./Content.scss";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Notfound from "./Notfound/Notfound";
import {Route, Routes} from "react-router-dom";

const Content = (props) => {

   return (
      <div className="content">
         <Routes>
            <Route path="/" element={<Profile profilePage={props.content.profilePage}/>}/>
            <Route path="/profile" element={<Profile profilePage={props.content.profilePage}/>}/>
            <Route path="/dialogs"
                   element={<Dialogs dialogsPage={props.content.dialogsPage}/>}/>
            <Route path="*" element={<Notfound/>}/>
         </Routes>
      </div>
   );
};

export default Content;
