import React from "react";
import Post from "./Post/Post";
import useStyles  from './styles';
import { useSelector } from "react-redux";

const Posts = () => {
    const post = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(post);
  return (
    <>
      <div>Posts</div>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
