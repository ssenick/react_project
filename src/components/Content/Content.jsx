import React from "react";
import "./Content.css";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

const Content = () => {
   return (
      <div className="content">
         <Routes>
            <Route path="/" element={<Profile/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/dialogs" element={<Dialogs/>}/>
         </Routes>
         {/*<Dialogs/>*/}
         {/*<Profile />*/}
      </div>


   );
};

export default Content;
