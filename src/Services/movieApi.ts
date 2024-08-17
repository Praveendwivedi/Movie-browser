import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Movies } from "./types";

export const movieApi = createApi({
	reducerPath: "movieApi",
	baseQuery: fetchBaseQuery({ baseUrl: `http://www.omdbapi.com` }),
	endpoints: (builder) => ({
		getMoviesByName: builder.query<Movies, { name: string; page: number }>({
			query: (payload) =>
				`?apikey=${process.env.REACT_APP_API_KEY}&s=${payload.name}&page=${payload.page}`,
		}),
	}),
});

export const { useLazyGetMoviesByNameQuery } = movieApi;
