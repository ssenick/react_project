import React from "react";
import "./Content.scss";
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Notfound from "./Notfound/Notfound";
import DialogsContainer from "./Dialogs/DialogsContainer";

const Content = (props) => {
   return (
      <div className="content">
         <Routes>
            <Route path="/" element={<Profile store={props.store}/>}/>
            <Route path="/profile" element={<Profile store={props.store}/>}/>
            <Route path="/dialogs" element={<DialogsContainer store={props.store}/>}/>
            {/*<Route path="/dialogs" element={<Dialogs store={props.store}/>}/>*/}
            <Route path="*" element={<Notfound/>}/>
         </Routes>
      </div>
   );
};

export default Content;
