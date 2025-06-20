import { Button } from '@mui/material';

const GuestActions = () => {
	const login = () => {
		// Implement logout logic here
		console.log('User logged out');
	};

	const register = () => {
		// Implement logout logic here
		console.log('User logged out');
	};

	return (
		<>
			<Button
				onClick={login}
				variant="outlined"
				sx={{
					color: '#a85f00',
					borderColor: '#f5a623',
					'&:hover': { borderColor: '#c97600' },
				}}
			>
				התחברות
			</Button>
			<Button
				onClick={register}
				variant="contained"
				sx={{
					backgroundColor: '#f8b14d',
					color: '#4b2e05',
					'&:hover': { backgroundColor: '#f59f0a' },
				}}
			>
				הרשמה
			</Button>
		</>
	);
};

export default GuestActions;
