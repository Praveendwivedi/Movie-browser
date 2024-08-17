import React, { useCallback, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useLazyGetMoviesByNameQuery } from "./Services/movieApi";
import useMoviesSearch from "./Services/useMoviesSearch";
import Card from "@mui/material/Card";
import {
	Box,
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import OutlinedCard from "./CustomCard";
import MovieCard from "./Components/MovieCard";

const Movies = {
	Search: [
		{
			Title: "Sweet Home Alabama",
			Year: "2002",
			imdbID: "tt0256415",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMjEwMjIwMDQ4OV5BMl5BanBnXkFtZTYwNzc3OTY3._V1_SX300.jpg",
		},
		{
			Title: "Sweet November",
			Year: "2001",
			imdbID: "tt0230838",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMTc4NjYzNzkzNl5BMl5BanBnXkFtZTYwNjg1ODc5._V1_SX300.jpg",
		},
		{
			Title: "Sweet Tooth",
			Year: "2021–2024",
			imdbID: "tt12809988",
			Type: "series",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BN2FlZWY1MWQtNTlkNy00ZjYxLTk0MmMtMGI4ZWIxNzhmODM5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		},
		{
			Title: "The Sweet Hereafter",
			Year: "1997",
			imdbID: "tt0120255",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BZTYxYzhlMTItOWQwNC00ZjFmLWFiYzMtNzQ2M2NjN2E3YmIxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		},
		{
			Title: "Sweet and Lowdown",
			Year: "1999",
			imdbID: "tt0158371",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BOGI1YWNiOTAtNmJiMi00NDE4LTk5NTctNjQzYzk1ZjlhZmRkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
		},
		{
			Title: "Sweet Smell of Success",
			Year: "1957",
			imdbID: "tt0051036",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMmJiNWFjN2ItOGY1ZS00MDI4LWJjYjYtMjlmYWYwNGNmODMzXkEyXkFqcGdeQXVyMTYwMTcxOTYy._V1_SX300.jpg",
		},
		{
			Title: "Sweet Girl",
			Year: "2021",
			imdbID: "tt10731768",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BOGIzOTZiZjItNTMyYS00ODcyLWE2ZDUtYWNjZDNmNTUxYjVkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
		},
		{
			Title: "Sweet Home",
			Year: "2020–",
			imdbID: "tt11612120",
			Type: "series",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BNWNjMmQ4MzgtOWY2Ny00MTRhLWI3MmYtOWQ1NWJhMjk4MjQyXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX300.jpg",
		},
		{
			Title: "Sweet Magnolias",
			Year: "2020–",
			imdbID: "tt9077540",
			Type: "series",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYzI0ZDRhNTgtOWQ4Zi00ZThmLTlhMzQtZThiYTY3ZDk0NzAxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		},
		{
			Title: "Home Sweet Home Alone",
			Year: "2021",
			imdbID: "tt11012066",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMDlkMzZiM2EtZDMxZC00ZWUwLTliMDMtMGMzMzE3NTEzMThiXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
		},
	],
	totalResults: "1955",
	Response: "True",
};

function App() {
	const [movieQuery, setMovieQuery] = useState("sweet");
	const [PageNum, setPageNum] = useState(1);
	const { isError, isLoading, mData } = useMoviesSearch(movieQuery, PageNum);

	const observer = useRef<any>();
	const lastMovieCardRef = useCallback((element: any) => {
		if (isLoading) return;

		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setPageNum((prevPage) => prevPage + 1);
			}
		});
		if (element) observer.current.observe(element);
	}, []);

	const handleChange = (e: any) => {
		setMovieQuery(e.target.value);
		setPageNum(1);
	};
	return (
		<div className="App">
			<input value={movieQuery} onChange={handleChange} />
			<Box display={"grid"} width={"100%"} gap={2}>
				{mData.map((data, index) => {
					if (index === mData.length - 1)
						return (
							<div ref={lastMovieCardRef}>
								<MovieCard
									title={data.Title}
									url={data.Poster}
									year={data.Year}
									key={data.Title}
								/>
							</div>
						);
					return (
						<MovieCard
							title={data.Title}
							url={data.Poster}
							year={data.Year}
							key={data.Title}
						/>
					);
				})}
			</Box>
			{isLoading && <p style={{ height: 500, padding: 5 }}>Loading....</p>}
			{isError && <p>Error!</p>}
		</div>
	);
}

export default App;
