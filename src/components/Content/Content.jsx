import React from "react";
import "./Content.css";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Content = () => {
   return (
      <BrowserRouter>
         <div className="content">
            <Routes>
               <Route path="/dialogs" element={<Dialogs/>}/>
               <Route path="/profile" element={<Profile/>}/>
            </Routes>
            {/*<Dialogs/>*/}
            {/*<Profile />*/}
         </div>
      </BrowserRouter>

   );
};

export default Content;
