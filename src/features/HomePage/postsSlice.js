import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    pages: 0,
    itemsPerPage: 10, // Default number of items per page
    currentPost: null, 
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
        setPages: (state, action) => {
            state.pages = action.payload;
        },
        setItemsPerPage: (state, action) => {
            state.itemsPerPage = action.payload;
        },
    },
});

// fetch the posts
export const fetchPostsAsync = () => async (dispatch, getState) => {
    try {
        const res = await fetch("http://localhost:4000/posts");
        const data = await res.json();
        let  posts = data.map((post) => {
           return [post._id, post.title, post.tags, post.reactions.likes, post.reactions.dislikes, post.views, "2024-05-20"];
        });

        dispatch(setPages(Math.ceil(posts.length / getState().posts.itemsPerPage))); // Set the number of pages
        dispatch(fetchPosts(posts));
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

// update the total number of pages
export const updatePages = () => (dispatch, getState) => {
    dispatch(setPages(Math.ceil(getState().posts.posts.length / getState().posts.itemsPerPage)));
};

// Selectors
export const getCurrentPost = (state) => state.posts.currentPost;
export const getAllPosts = (state) => state.posts.posts;
export const getTotalPages = (state) => state.posts.pages;


export const getPostsInPage = createSelector(
    (state) => state.posts.posts,
    (state) => state.posts.itemsPerPage,
    (_, pageNumber) => pageNumber,
    (posts, itemsPerPage, pageNumber) => {
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return posts.slice(startIndex, endIndex);
    }

);

// actions
export const { 
    fetchPosts, fetchPost, setPages, setItemsPerPage
} = postsSlice.actions;

export default postsSlice.reducer;
