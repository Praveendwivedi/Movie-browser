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
  const [loading, setLoading] = useState(false)
	useEffect(() => {
		setMData([]);
	}, [query]);

	useEffect(() => {
    setLoading(true);
		let controller =  getMoviesTrigger({ name: query, page: pageNum });
		controller.then((res) =>
			setMData((prevData) => {
        console.log("setm",res, prevData);
        
				if (res.data?.Search) return [...prevData, ...res.data?.Search];
				return prevData;
			})
		).catch(e=>console.log("Error")).finally(()=>setLoading(false));
		return () => {
      controller.abort()};
	}, [query, pageNum]);

	return { isLoading, isError, mData, loading };
} 

export default useMoviesSearch;
