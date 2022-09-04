import React from "react";
import AboutProfile from "./AboutProfile";

const AboutProfileContainer = (props) => {
   return <AboutProfile aboutProfile={props.store.getState().profilePage.aboutProfile}/>
}

export default AboutProfileContainer;