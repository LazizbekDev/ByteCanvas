import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postServices from "./postServices";

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
};

export const getPosts = createAsyncThunk('posts/get', async (_, thunkAPI) => {
    try {
        return await postServices.getPosts();
    } catch (err) {
        return thunkAPI.rejectWithValue(err.toString());
    }
});

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.isLoading = true
        })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
})

export const { reset } = postSlice.actions;
export default postSlice.reducer;
