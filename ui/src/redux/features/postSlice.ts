import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../types/post.type';

type CurrentPost = {
    post: Post;
};

const initialState: CurrentPost = {
    post: { id: 0, userId: 0, title: '', body: '' },
};

export const postSlice = createSlice({
    initialState,
    name: 'postSlice',
    reducers: {
        setPost: (state, action: PayloadAction<Post>) => {
            state.post = action.payload;
        },
    },
});

export default postSlice.reducer;

export const { setPost } = postSlice.actions;
