import React from "react";
import s from "./Friends.module.scss";
import Friend from "./Friend/Friend";


const Friends = (props) => {
   const friends = props.friends.map((friend, index) => {
      return <Friend key={index} to={friend.to} src={friend.src} name={friend.name}/>
   })
   return (
      <div className={s.friends}>
         {friends}
      </div>
   )
};
export default Friends;