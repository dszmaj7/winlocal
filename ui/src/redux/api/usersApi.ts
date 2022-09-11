import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../types/post.type";
import { User } from "../types/user.type";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => `users`,
    }),
    getUserPosts: builder.query<Post[], number>({
      query: (userId: number) => `users/${userId}/posts`
    })
  }),
});

export const { useGetUsersQuery, useGetUserPostsQuery } = usersApi;
