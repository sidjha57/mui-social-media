import { Box, Typography } from "@mui/material";

export const Rightbar = () => {
	return (
		<Box
			flex={2}
			p={2}
			sx={{ display: { xs: "none", sm: "block" } }}
		>
			<Box position="fixed">
        <Typography>Online Friends</Typography>
      </Box>
		</Box>
	);
};
