import React from "react";
import s from "./MyPosts.module.scss";
import MyPost from "./Post/MyPost";


const MyPosts = (props) => {
   let textArea = React.createRef();
   let input = React.createRef();
   return (
      <div className={s.myPosts}>
         <h3 className={s.title}>My posts</h3>
         <h2 className={s.label}>Enter post text</h2>

         <textarea onChange={() => {
            props.updateTextArea(textArea.current.value)
         }} ref={textArea} value={props.newPostText.textArea} className={s.textArea}></textarea>

         <h2 className={s.label}>Enter image link</h2>

         <input onChange={() => {
            props.updateTextInput(input.current.value)
         }} ref={input} value={props.newPostText.textInput} className={s.input}></input>

         <button onClick={() => {
            props.addNewPost();

         }} className={s.postsBtn}>Send
         </button>

         <div className={s.postsItems}>

            {props.postData
               .map((p, i) => <MyPost id={p.id} key={i} src={p.src} text={p.message} like={p.like}/>)}
         </div>
      </div>
   );
};

export default MyPosts;
