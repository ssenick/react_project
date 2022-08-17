import React from "react";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__image">
                <img
                    src="https://img5.goodfon.ru/wallpaper/nbig/c/b2/apelsin-tsitrus-listia-fon.jpg"
                    alt=""/>
            </div>
            <div className="profile__about">
                <div className="profile__avatar">
                    <img src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51401141-stock-illustration-male-avatar-profile-picture-use.jpg" alt=""/>
                </div>
                <div className="profile__info">
                    <div className="profile__name">Ruslan S.</div>
                    <div className="profile__date">Date of Birth: 14 january   </div>
                    <div className="profile__city">City: Namestovo</div>
                    <div className="profile__web-site">Web-site: https://greenshok.ssenick.fun</div>
                </div>
            </div>
            <div className="profile__my-posts"></div>
        </div>

    )
}

export default Profile;