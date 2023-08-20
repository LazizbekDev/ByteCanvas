import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postServices from "./postServices";

const initialState = {
    posts: [],
    markdown: null,
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

export const postContent = createAsyncThunk('postContent/get', async (slug, thunkAPI) => {
    try {
        console.log(slug)

        return await postServices.getContent(slug);
    } catch (err) {
        return thunkAPI.rejectWithValue(err.toString());
    }
});

export const createContent = createAsyncThunk('createContent/post', async (data, thunkAPI) => {
    try {
        return await postServices.createPost(data);
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
            .addCase(postContent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(postContent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.markdown = action.payload;
            })
            .addCase(postContent.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            .addCase(createContent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createContent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload;
            })
            .addCase(createContent.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
})

export const { reset } = postSlice.actions;
export default postSlice.reducer;
