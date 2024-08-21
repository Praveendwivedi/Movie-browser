export type Movies = {
	Search: MovieDetail[];
	totalResults: number;
	Response: boolean;
};

export type MovieDetail = {
	Title: string;
	Year: string;
	imdbID: string;
	Type: string;
	Poster: string;
};

export type MovieCardProps = {
	title: string;
	url: string;
	year: string;
	imdbID: string;
};
