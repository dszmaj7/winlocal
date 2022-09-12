import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types/post.type';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    refetchOnMountOrArgChange: true,
    tagTypes: ['Post'],
    endpoints: builder => ({
        getPost: builder.query<Post, number>({
            query: (postId: number) => `posts/${postId}`,
            providesTags: ['Post'],
        }),
        addPost: builder.mutation<Post, Omit<Post, 'id'>>({
            query: post => ({
                url: 'posts',
                method: 'POST',
                body: {
                    title: post.title,
                    body: post.body,
                    userId: post.userId,
                },
            }),
            invalidatesTags: ['Post'],
        }),
        deletePost: builder.mutation<Post, number>({
            query: id => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetPostQuery, useAddPostMutation, useDeletePostMutation } = postApi;
