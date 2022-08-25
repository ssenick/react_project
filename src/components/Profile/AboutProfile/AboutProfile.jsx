import React from "react";
import s from "./AboutProfile.module.css";

const AboutProfile = () => {
   return (
      <div className={s.aboutProfile}>
         <div className={s.aboutAvatar}>
            <img
               src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51401141-stock-illustration-male-avatar-profile-picture-use.jpg"
               alt=""
            />
         </div>
         <div className={s.aboutInfo}>
            <div className={s.aboutName}>Ruslan S.</div>
            <div className={s.aboutDate}>Date of Birth: <strong>14 january</strong></div>
            <div className={s.aboutCity}>City: <strong>Namestovo</strong></div>
            <div className={s.aboutWebCite}>
               Web-site:
               <a href="https://greenshop.ssenick.fun">
                  <strong>https://greenshop.ssenick.fun</strong>
               </a>
            </div>
         </div>
      </div>
   )
}

export default AboutProfile;