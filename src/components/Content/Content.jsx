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
            <Route path="/"
                   element={<Profile profilePage={props.state.content.profilePage}
                                     addNewPost={props.addNewPost}
                                     updateTextArea={props.updateTextArea}
                                     updateTextInput={props.updateTextInput}/>}/>

            <Route path="/profile"
                   element={<Profile profilePage={props.state.content.profilePage}
                                     addNewPost={props.addNewPost}
                                     updateTextArea={props.updateTextArea}
                                     updateTextInput={props.updateTextInput}/>}/>

            <Route path="/dialogs"
                   element={<Dialogs dialogsPage={props.state.content.dialogsPage}
                                     addNewMessage={props.addNewMessage}
                                     updateTextAreaMessage={props.updateTextAreaMessage}/>}/>
            <Route path="*" element={<Notfound/>}/>
         </Routes>
      </div>
   );
};

export default Content;
