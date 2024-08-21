import { Search } from '@mui/icons-material'
import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import LiveTvIcon from "@mui/icons-material/LiveTv";


const TopBar = (props:{children?:any}) => {
  return (
    <Box sx={{ flexGrow: 1, position: "fixed", width: "100%", zIndex: 5 }}>
			<AppBar position="static">
				<Toolbar>
					<LiveTvIcon
						sx={{ height: 30, width: 30, marginRight: 1, marginBottom: 1 }}
						aria-label="Movie Browser"
					/>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
					>
						Movie Browser
					</Typography>
					{props.children}
				</Toolbar>
			</AppBar>
		</Box>
  )
}

export default TopBar