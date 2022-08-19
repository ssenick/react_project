import React from "react";
import "./Content.css";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

const Content = () => {
  return (
    <div className="content">
      <Dialogs />
      {/*<Profile />*/}
    </div>
  );
};

export default Content;
