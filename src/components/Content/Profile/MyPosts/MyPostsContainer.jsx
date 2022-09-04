import React from "react";
import MyPosts from "./MyPosts";
import {
   addPostsCreator,
   updateTextAreaPostsCreator,
   updateTextInputPostsCreator
} from "../../../../redux/profile-reducer";


const MyPostsContainer = (props) => {
   const onChangArea = (text) => {
      props.store.dispatch(updateTextAreaPostsCreator(text))
   }
   const onChangInput = (text) => {
      props.store.dispatch(updateTextInputPostsCreator(text));
   }
   const onClickBtn = () => {
      props.store.dispatch(addPostsCreator());
   }

   return <MyPosts postData={props.store.getState().profilePage.posts.postData}
                   onChangArea={onChangArea}
                   onChangInput={onChangInput}
                   onClickBtn={onClickBtn}
                   newPostText={props.store.getState().profilePage.posts.newPostText}
   />
};

export default MyPostsContainer;
