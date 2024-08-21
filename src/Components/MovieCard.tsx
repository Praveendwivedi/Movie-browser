import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	styled,
	IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useSaveMovie from "../Services/useSaveMovie";
import { MovieCardProps } from "../Services/types";
import { useEffect, useState } from "react";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

const MovieCard = (props: MovieCardProps) => {
	const { getMovies, setFavorite, isFavorite, removeFavorite } = useSaveMovie();
	const [fav, setFav] = useState(isFavorite(props.imdbID));
	let Movies = getMovies();
    
	useEffect(() => {
		fav ? setFavorite(props) : removeFavorite(props);
        
		Movies = getMovies();
        console.log("fav", fav, Movies);

	}, [fav]);

	return (
		<Card
			sx={{
				width: { xs: "auto", sm: 345 },
				minWidth: { xs: "100%", sm: 300 },
				height: "100%",
				marginBottom: 2,
			}}
		>
			<CardMedia
				component="img"
				alt={props.title}
				sx={{
					height: { xs: "auto", sm: 500 },
					objectFit: "contain",
				}}
				image={props.url}
			/>
			<CardContent>
				<Typography variant="h6" component="div" align="center">
					{props.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{props.year}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton
					aria-label="favorite"
					color={fav ? "warning" : "primary"}
					onClick={() => setFav(!fav)}
				>
					<FavoriteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default MovieCard;
