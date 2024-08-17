import React, { useEffect, useState } from "react";
import { useLazyGetMoviesByNameQuery } from "./movieApi";

type MData = {
	Title: string;
	Year: string;
	imdbID: string;
	Type: string;
	Poster: string;
}[];

function useMoviesSearch(query: string, pageNum: number) {
	const [mData, setMData] = useState<MData>([]);
	const [getMoviesTrigger, { isLoading, isError }] =
		useLazyGetMoviesByNameQuery();

	useEffect(() => {
		setMData([]);
	}, [query]);

	useEffect(() => {
		let controller =  getMoviesTrigger({ name: query, page: pageNum });
		controller.then((res) =>
			setMData((prevData) => {
				if (res.data?.Search) return [...prevData, ...res.data?.Search];
				return prevData;
			})
		).catch(e=>console.log("Error"));
		return () => {
      // controller.abort()
      };
	}, [query, pageNum]);

	return { isLoading, isError, mData };
} 

export default useMoviesSearch;
