import { AppBar, Box, Toolbar } from '@mui/material';

import GuestActions from './GuestActions';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserActions from './UserActions';

const Navbar = () => {
	const user = null;

	return (
		<AppBar
			position="fixed"
			elevation={2}
			sx={{
				backgroundColor: '#EBE4DC',
				borderBottom: '4px solid #f8b14d',
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			<Toolbar sx={{ justifyContent: 'space-between', px: 3, py: 1 }}>
				<Logo />
				<Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
					<SearchBar />
				</Box>
				<Box display="flex" alignItems="center" gap={2}>
					{!user ? <GuestActions /> : <UserActions />}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
