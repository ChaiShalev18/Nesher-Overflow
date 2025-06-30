import { Button, Typography } from '@mui/material';

const UserActions = () => {
	const user = { username: 'משתמש' };

	const logout = () => {
		// Implement logout logic here
		console.log('User logged out');
	};

	return (
		<>
			<Typography variant="body1" sx={{ color: '#4b2e05' }}>
				שלום, {user.username}
			</Typography>
			<Button
				onClick={logout}
				variant="outlined"
				sx={{
					color: '#aa2a00',
					borderColor: '#ff7043',
					'&:hover': { borderColor: '#e65100' },
				}}
			>
				התנתקות
			</Button>
		</>
	);
};

export default UserActions;
