import React from "react";
import Friends from "./Friends";

const FriendsContainer = (props) => {
   return <Friends friends={props.store.getState().aside.friends}/>
};
export default FriendsContainer;