import React from "react";
import { Movies, MovieCardProps } from "./types";

const useSaveMovie = () => {
	function removeItem(
		arr: Array<MovieCardProps>,
		value: MovieCardProps
	): Array<MovieCardProps> {
		const index = arr.findIndex((val) => val.imdbID === value.imdbID);
		if (index > -1) {
			arr.splice(index, 1);
		}
		return arr;
	}

	const getMovies = () => {
		try {
			const item = window.localStorage.getItem("Movies");
			return (item ? JSON.parse(item) : []) as MovieCardProps[];
		} catch (error) {
			console.error(error);
			return [] as MovieCardProps[];
		}
	};
	const setFavorite = (movie: MovieCardProps) => {
		try {
			const storedMovies = getMovies();
			if (isFavorite(movie.imdbID)) return;
			window.localStorage.setItem(
				"Movies",
				JSON.stringify([...storedMovies, movie])
			);
		} catch (error) {
			console.error(error);
		}
	};

	const removeFavorite = (movie: MovieCardProps) => {
		try {
			const storedMovies = getMovies();
			const newMovies = removeItem(storedMovies, movie);
			window.localStorage.setItem("Movies", JSON.stringify(newMovies));
		} catch (error) {
			console.error(error);
		}
	};
	const isFavorite = (id: string) => {
		const Movies = getMovies();
		return Movies.some((val) => val.imdbID === id);
	};
	return { getMovies, setFavorite, isFavorite, removeFavorite };
};

export default useSaveMovie;
