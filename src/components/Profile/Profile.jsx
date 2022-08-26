import React from "react";
import prof from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import AboutProfile from "./AboutProfile/AboutProfile";

const Profile = (props) => {
   return (
      <div className={prof.profile}>
         <div className={prof.profile__image}>
            <img
               src="https://img5.goodfon.ru/wallpaper/nbig/c/b2/apelsin-tsitrus-listia-fon.jpg"
               alt=""
            />
         </div>
         <AboutProfile/>
         <MyPosts data={props.data}/>
      </div>
   );
};

export default Profile;
