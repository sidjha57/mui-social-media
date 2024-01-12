import { Diversity2TwoTone, Mail, Notifications } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	InputBase,
	Toolbar,
	Typography,
	styled,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled("div")(({ theme }) => ({
	display: "none",
	gap: "20px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled("div")(({ theme }) => ({
	display: "flex",
	gap: "10px",
	alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  }
}));

export const Navbar = () => {
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					SID SOCIAL
				</Typography>
				<Diversity2TwoTone sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="search..." />
				</Search>
				<Icons>
					<Badge color="error" badgeContent={4}>
						<Mail />
					</Badge>
					<Badge color="error" badgeContent={4}>
						<Notifications />
					</Badge>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					/>
				</Icons>
				<UserBox>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					/>
          <Typography>John</Typography>
				</UserBox>
			</StyledToolbar>
		</AppBar>
	);
};
