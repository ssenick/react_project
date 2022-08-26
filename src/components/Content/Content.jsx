import React from "react";
import "./Content.css";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Notfound from "../Notfound/Notfound";

const Content = (props) => {
   return (
      <div className="content">
         <Routes>
            <Route path="/" element={<Profile data={props.data}/>}/>
            <Route path="/profile" element={<Profile data={props.data}/>}/>
            <Route path="/dialogs" element={<Dialogs data={props.data}/>}/>
            <Route path="*" element={<Notfound/>}/>
         </Routes>
         {/*<Message/>*/}
         {/*<Profile />*/}
      </div>
   );
};

export default Content;
