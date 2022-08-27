import React from "react";
import posts from "./MyPosts.module.scss";
import MyPost from "./Post/MyPost";


const MyPosts = (props) => {
   let newPostElement = React.createRef();
   let addPost = () => {
      let text = newPostElement.current.value !== '' ? newPostElement.current.value : "Нет ничего";
      alert(text)
   }

   return (
      <div className={posts.myPosts}>
         <h3 className={posts.title}>My posts</h3>
         <textarea ref={newPostElement} name="posts" className={posts.textArea}></textarea>
         <button onClick={addPost} className={posts.postsBtn}>OK</button>
         <div className={posts.postsItems}>

            {props.postData
               .map((p, i) => <MyPost key={i} src={p.src} text={p.message} like={p.like}/>)}

         </div>
      </div>
   );
};

export default MyPosts;
