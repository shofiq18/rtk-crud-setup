import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a Post type to replace 'any'
export interface Post {
  id: string;
  title: string;
  content: string;
  // Add other fields as needed
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: "Post", id }],
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation<Post, { id: string; data: Partial<Post> }>({
      query: ({ id, data }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (res, err, { id }) => [{ type: "Post", id }],
    }),
    deletePost: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = apiSlice;
