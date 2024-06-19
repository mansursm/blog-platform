import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/HomePage/postsSlice";
import userReducer from "./features/AdminPage/userSlice";
import AuthReducer from "./features/LoginPage/authSlice";

export default configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer,
        auth: AuthReducer,
    },
});

