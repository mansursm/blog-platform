import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    currentPost: null, // Add a new state property to store a single post
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        fetchPosts: (state, action) => {
            state.posts = action.payload;
        },
        fetchPost: (state, action) => {
            state.currentPost = action.payload; // Update the currentPost state property
        },
    },
});

// fetch the posts
export const fetchPostsAsync = () => async (dispatch) => {
    try {
        const res = await fetch("http://localhost:4000/posts");
        const data = await res.json();
        const formatedData = data.map((post) => {
           return [post._id, post.title, post.tags, post.reactions.likes, post.reactions.dislikes, post.views, "2024-05-20"];
        });
        console.log(formatedData);
        dispatch(fetchPosts(formatedData));
    } catch (error) {
        console.log(error);
    }
};

// get a post
export const getPostAsync = (id) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:4000/posts/${id}`);
        const data = await res.json();
        const formatedData = [data._id, data.title, data.body, data.tags, data.reactions.likes, data.reactions.dislikes, data.views, "2024-05-20"];
        dispatch(fetchPost(formatedData));
    } catch (error) {
        console.log(error);
    }
};

// get a post
export const getCurrentPost = (state) => {
    return state.posts.currentPost
};
// get all posts
export const getAllPosts = (state) => state.posts.posts;

// actions
export const { 
    fetchPosts, fetchPost
} = postsSlice.actions;

export default postsSlice.reducer;
