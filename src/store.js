import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/HomePage/postsSlice";
import userReducer from "./features/AdminPage/userSlice";

export default configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer,
    },
});

