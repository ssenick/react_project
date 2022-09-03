import React from "react";
import s from "./MyPosts.module.scss";
import MyPost from "./Post/MyPost";
import {
   addPostsCreator,
   updateTextAreaPostsCreator,
   updateTextInputPostsCreator
} from "../../../../redux/profile-reducer";


const MyPosts = (props) => {
   const postsItems = props.postData
      .map((p, i) => <MyPost id={p.id} key={i} src={p.src} text={p.message} like={p.like}/>);
   const textArea = React.createRef();
   const input = React.createRef();
   const onChangArea = () => {
      props.dispatch(updateTextAreaPostsCreator(textArea.current.value))
   }
   const onChangInput = () => {
      props.dispatch(updateTextInputPostsCreator(input.current.value));
   }
   const onClickBtn = () => {
      props.dispatch(addPostsCreator());
   }

   return (
      <div className={s.myPosts}>
         <h3 className={s.title}>My posts</h3>
         <h2 className={s.label}>Enter post text</h2>
         <textarea onChange={() => onChangArea()} ref={textArea} value={props.newPostText.textArea}
                   className={s.textArea}></textarea>
         <h2 className={s.label}>Enter image link</h2>
         <input onChange={() => onChangInput()} ref={input} value={props.newPostText.textInput}
                className={s.input}></input>
         <button onClick={() => onClickBtn()} className={s.postsBtn}>Send
         </button>
         <div className={s.postsItems}>
            {postsItems}
         </div>
      </div>
   );
};

export default MyPosts;
