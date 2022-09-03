import React from "react";
import s from "./AboutProfile.module.scss";

const AboutProfile = (props) => {
   return (
      <div className={s.aboutProfile}>
         <div className={s.aboutAvatar}>
            <img
               src={props.aboutProfile.src}
               alt="avatar"
            />
         </div>
         <div className={s.aboutInfo}>
            <div className={s.aboutName}>{props.aboutProfile.name}</div>
            <div className={s.aboutDate}>Date of Birth:&nbsp;<strong>{props.aboutProfile.date}</strong></div>
            <div className={s.aboutCity}>City:&nbsp;<strong>{props.aboutProfile.city}</strong></div>
            <div className={s.aboutWebCite}>
               Web-site: &nbsp;
               <a href={props.aboutProfile.href}>
                  <strong>{props.aboutProfile.href}</strong>
               </a>
            </div>
         </div>
      </div>
   )
}

export default AboutProfile;