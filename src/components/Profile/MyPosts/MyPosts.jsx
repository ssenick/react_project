import React from "react";
import posts from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";


const MyPosts = (props) => {
   let postsElement = props.postData.map((p, i) => <MyPost key={i} src={p.src} text={p.message} like={p.like}/>)
   return (
      <div className={posts.myPosts}>
         <h3 className={posts.title}>My posts</h3>
         <textarea name="posts" className={posts.textArea}></textarea>
         <button className={posts.postsBtn}>OK</button>
         <div className={posts.postsItems}>
            {postsElement}
         </div>
      </div>
   );
};

export default MyPosts;
