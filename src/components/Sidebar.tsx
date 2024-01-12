import { Box } from "@mui/material";

export const Sidebar = () => {
	return (
		<Box bgcolor="green" flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}}>
			Sidebar
		</Box>
	);
};
