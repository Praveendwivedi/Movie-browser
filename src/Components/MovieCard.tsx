import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	ButtonBase,
	Grid,
	Paper,
	styled,
} from "@mui/material";
import React from "react";

type MovieCardProps = {
	title: string;
	url: string;
	year: string;
};
const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

const MovieCard = (props: MovieCardProps) => {
	return (
		<Paper
        
			sx={{
				p: 2,
				margin: "auto",
                width:300,
				flexGrow: 1,
				backgroundColor: (theme) =>
					theme.palette.mode === "dark" ? "#1A2027" : "#fff",
			}}
		>
			<Grid container spacing={2}>
				<Grid item>
					<ButtonBase sx={{ width: 200, height: 150 }}>
						<Img alt="complex" src={props.url} />
					</ButtonBase>
				</Grid>
				<Grid item xs={"auto"} sm container>
					<Grid item xs container direction="column" spacing={2}>
						<Grid item xs>
							<Typography gutterBottom variant="subtitle1" component="div">
								{props.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Year: {props.year}
							</Typography>
						</Grid>
						<Grid item>
							<Typography sx={{ cursor: "pointer" }} variant="body2">
								Remove
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
	return (
		<Card sx={{ height: "auto", width: 200 }}>
			<CardMedia
				sx={{ width: 200, height: 300 }}
				image={props.url}
				title={props.title}
			/>
			<CardContent>
				<Typography gutterBottom variant="subtitle1" component="div">
					{props.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{props.year}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default MovieCard;
