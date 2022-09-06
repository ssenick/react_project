import React from "react";
import "./Content.scss";
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Notfound from "./Notfound/Notfound";
import DialogsContainer from "./Dialogs/DialogsContainer";

const Content = () => {
   return (
      <div className="content">
         <Routes>
            <Route path="/" element={<Profile/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/dialogs" element={<DialogsContainer/>}/>
            <Route path="*" element={<Notfound/>}/>
         </Routes>
      </div>
   );
};

export default Content;
