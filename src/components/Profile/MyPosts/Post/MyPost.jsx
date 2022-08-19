import React from "react";
import p from "./MyPost.module.css";

const MyPost = (props) => {
  return (
    <div className={p.post}>
      <div className={p.postImage}>
        <img src={props.src} alt="" />
      </div>
      <p className={p.postText}>{props.text}</p>
      <p className={p.postLike}>
        Likes: <span>{props.like}</span>{" "}
      </p>
    </div>
  );
};

export default MyPost;
