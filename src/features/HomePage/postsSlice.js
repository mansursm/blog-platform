import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },

        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        },

        updatePost: (state, action) => {
            const { id, title, content } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
        fetchPosts: (state, action) => {
            state.posts = action.payload;
        },
        getPost: (state, action) => {
            return state.posts.find((post) => post.id === action.payload);
        },

        addComment: (state, action) => {
            const { id, text } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.comments.push(text);
            }
        },

        deleteComment: (state, action) => {
            const { id, commentId } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.comments = existingPost.comments.filter((comment, index) => index !== commentId);
            }
        },

        updateComment: (state, action) => {
            const { id, commentId, text } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.comments[commentId] = text;
            }
        },

        addLike: (state, action) => {
            const { id } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.likes += 1;
            }
        },

        removeLike: (state, action) => {
            const { id } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.likes -= 1;
            }
        },

        addDislike: (state, action) => {
            const { id } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.dislikes += 1;
            }
        },

        removeDislike: (state, action) => {
            const { id } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.dislikes -= 1;
            }
        },

        addCommentLike: (state, action) => {
            const { id, commentId } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.comments[commentId].likes += 1;
            }
        },

        removeCommentLike: (state, action) => {
            const { id, commentId } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.comments[commentId].likes -= 1;
            }
        },

        addCommentDislike: (state, action) => {
            const { id, commentId } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.comments[commentId].dislikes += 1;
            }
        },

        removeCommentDislike: (state, action) => {
            const { id, commentId } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.comments[commentId].dislikes -= 1;
            }
        },

    },
});

// fetch the posts
export const fetchPostsAsync = () => async (dispatch) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        const formatedData = data.map((post) => {
          return [post.id, post.title, ["#DevOps", "#IT", "#Architecture"].join(", "), "2024-05-20"];
        });
        console.log(formatedData);
        dispatch(fetchPosts(formatedData));
    } catch (error) {
        console.log(error);
    }
};

// // posts state
// export const selectPosts = (state) => state.posts.posts;

// // get a post
// export const getPost = (state, id) => state.posts.posts.find((post) => post.id === id);

// get all posts
export const getAllPosts = (state) => state.posts.posts;

// actions
export const { 
    addPost, deletePost, updatePost, addComment, deleteComment, updateComment,
     addLike, removeLike, addDislike, removeDislike, addCommentLike, removeCommentLike,
      addCommentDislike, removeCommentDislike, fetchPosts, getPost 
} = postsSlice.actions;

export default postsSlice.reducer;
