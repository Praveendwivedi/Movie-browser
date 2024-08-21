import React, { useEffect } from "react";
import TopBar from "./Components/TopBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useSaveMovie from "./Services/useSaveMovie";
import MovieCard from "./Components/MovieCard";

const FavMovies = () => {
	const navigate = useNavigate();
    const { getMovies} = useSaveMovie();
    let movieList = getMovies();

    useEffect(()=>{

    },[])
	return (
		<div className="App">
			<TopBar>
				<IconButton aria-label="favorite" onClick={() => navigate("/")}>
					<ArrowBackIcon />
				</IconButton>
			</TopBar>
			<Box style={{display:"flex", justifyContent:"flex-start", padding:20, paddingTop:70, flexDirection:"row", flexWrap:"wrap", gap:10}}>
            {movieList.map((movie)=><MovieCard {...movie}/>)}
            </Box>
		</div>
	);
};

export default FavMovies;
