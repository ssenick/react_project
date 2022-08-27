import React from "react";
import s from "./Friends.module.scss";
import Friend from "./Friend/Friend";


const Friends = (props) => {
   return (
      <div className={s.friends}>
         {props.friends.map((friend, index) => {
            return <Friend key={index} to={friend.to} src={friend.src} name={friend.name}/>
         })}
      </div>
   )
};
export default Friends;