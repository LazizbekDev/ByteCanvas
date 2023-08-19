import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./redux/post/postSlice";

export const store = configureStore({
    reducer: {
        posts: postReducer
    }
})