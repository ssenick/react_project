import React from "react";
import prof from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={prof.profile}>
      <div className={prof.profile__image}>
        <img
          src="https://img5.goodfon.ru/wallpaper/nbig/c/b2/apelsin-tsitrus-listia-fon.jpg"
          alt=""
        />
      </div>
      <div className={prof.profile__about}>
        <div className={prof.profile__avatar}>
          <img
            src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51401141-stock-illustration-male-avatar-profile-picture-use.jpg"
            alt=""
          />
        </div>
        <div className={prof.profile__info}>
          <div className={prof.profile__name}>Ruslan S.</div>
          <div className={prof.profile__date}>Date of Birth: 14 january</div>
          <div className={prof.profile__city}>City: Namestovo</div>
          <div className={prof.profile__webSite}>
            Web-site:{" "}
            <a href="https://greenshok.ssenick.fun">
              https://greenshok.ssenick.fun
            </a>
          </div>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
