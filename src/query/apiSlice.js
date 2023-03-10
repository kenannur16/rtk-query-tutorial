import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

export const jokesApi = createApi({
  reducerPath: "jokesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.chucknorris.io/jokes/",
  }),
  endpoints: (builder) => ({
    getJokes: builder.query({
      query: () => "random",
    }),
  }),
});

export const { useGetJokesQuery } = jokesApi;
