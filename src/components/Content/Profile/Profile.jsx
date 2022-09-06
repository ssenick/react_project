import React from "react";
import prof from "./Profile.module.scss";
import AboutProfileContainer from "./AboutProfile/AboutProfileContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
   return (
      <div className={prof.profile}>
         <div className={prof.profileImage}>
            <img
               src="https://wallpapers-fenix.eu/full/170112/061513544.jpg"
               alt=""
            />
         </div>
         <div className={prof.profileContent}>
            <AboutProfileContainer/>
            <MyPostsContainer/>
         </div>
      </div>
   );
};

export default Profile;
