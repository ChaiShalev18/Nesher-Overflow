import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

const SearchBar = () => (
	<TextField
		placeholder="חפש..."
		variant="outlined"
		size="small"
		dir="rtl"
		sx={{
			backgroundColor: '#ffffff',
			borderRadius: '4px',
			width: { xs: '100%', sm: '300px', md: '400px' },
			'& .MuiOutlinedInput-root': {
				'& fieldset': { borderColor: '#f5a623' },
				'&:hover fieldset': { borderColor: '#c97600' },
				'&.Mui-focused fieldset': { borderColor: '#f8b14d' },
				color: '#4b2e05',
			},
		}}
		slotProps={{
			input: {
				startAdornment: (
					<InputAdornment position="start">
						<SearchIcon sx={{ color: '#4b2e05' }} />
					</InputAdornment>
				),
			},
		}}
	/>
);

export default SearchBar;
