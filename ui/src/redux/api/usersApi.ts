import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../features/userSlice";
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
      query: (userId: number) => `users/${userId}/posts`,
    }),
    getUser: builder.query<User, number>({
      query: (userId: number) => `users/${userId}`,
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        const { data: user } = await queryFulfilled;
        console.log(user);
        dispatch(setUser(user));
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetUserPostsQuery, useGetUserQuery } = usersApi;
