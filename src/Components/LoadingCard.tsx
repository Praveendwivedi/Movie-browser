import { Card, CircularProgress } from "@mui/material";
import React from "react";

const LoadingCard = () => {
	return (
		<Card
			sx={{
                display:"flex",
				width: { xs: "auto", sm: 345 },
				minWidth: { xs: "100%", sm: 300 },
				height:650,
                justifyContent:"center",
                alignContent:"center",
				margin: "auto",
				marginBottom: 2,
			}}
		>
            <CircularProgress sx={{margin:"auto"}}/>
        </Card>
	);
};

export default LoadingCard;
