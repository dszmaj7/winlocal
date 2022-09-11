import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "../types/comment.type";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], number>({
      query: (postId: number) => `comments?postId=${postId}`
    })
  }),
});

export const { useGetCommentsQuery } = commentsApi;
