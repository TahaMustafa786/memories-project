import * as api from "../api";

// api.fetchPosts();

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    dispatch({ type: "CREATE" , payload: data.post  });
  } catch (error) {
    console.log(error);
  }
};