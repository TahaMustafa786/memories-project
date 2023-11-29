import axios from "axios";

const url = "http://localhost:5000/api/v1/posts";
const createPostsUrl = "http://localhost:5000/api/v1/createPost";

export const fetchPosts = async () => axios.get(url);
export const createPosts = async (newPosts) => axios.post(createPostsUrl , newPosts);
