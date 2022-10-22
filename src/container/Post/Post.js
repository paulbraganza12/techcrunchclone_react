import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  let postThumb = {
    backgroundImage: "url(" + props.postdata.post_img + ")",
  };
  return (
    <div className={classes.Post} onClick={props.clicked}>
      <a href={props.postdata.post_links} target="_blank">
        <div className={classes.Thumb} style={postThumb}></div>
        <article>
          <h4>{props.postdata.post_title}</h4>
          <p>{props.postdata.post_desc}</p>
          <span className={classes.author}>{props.postdata.post_auth}</span>
          <span>{props.postdata.post_time}</span>
        </article>
      </a>
    </div>
  );
};

export default Post;
