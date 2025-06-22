import {
	Box,
	Button,
	MenuItem,
	Select,
	type SelectChangeEvent,
	Stack,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import QuestionCard from './QuestionCard';

const QuestionList = () => {
	const [sortBy, setSortBy] = useState('latest');

	// TODO: Replace this with useQuery to fetch questions from backend
	const fakeQuestions = [
		{ id: '1', title: 'איך מתחילים עם React?', votes: 5, createdAt: new Date().toISOString() },
		{
			id: '2',
			title: 'שאלה על useEffect ושעון עצר',
			votes: 10,
			createdAt: new Date().toISOString(),
		},
	];

	const handleSortChange = (event: SelectChangeEvent) => {
		setSortBy(event.target.value);
	};

	return (
		<Box sx={{ maxWidth: 900, mx: 'auto', pt: 10, px: 2 }}>
			<Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
				<Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4b2e05' }}>
					שאלות פעילות
				</Typography>
				<Button
					variant="contained"
					onClick={
						() =>
							console.log(
								'Navigate to ask question'
							) /* Replace with actual navigation logic */
					}
					sx={{
						backgroundColor: '#f8b14d',
						color: '#4b2e05',
						'&:hover': { backgroundColor: '#f59f0a' },
					}}
				>
					שאל שאלה
				</Button>
			</Stack>

			<Box mb={2} display="flex" justifyContent="flex-end">
				<Select
					value={sortBy}
					onChange={handleSortChange}
					size="small"
					sx={{ minWidth: 160 }}
				>
					<MenuItem value="latest">הכי חדשים</MenuItem>
					<MenuItem value="popular">הכי פופולריים</MenuItem>
					<MenuItem value="favorites">המועדפים שלי</MenuItem>
				</Select>
			</Box>

			<Stack spacing={2}>
				{fakeQuestions.map((q) => (
					<QuestionCard key={q.id} question={q} />
				))}
			</Stack>
		</Box>
	);
};

export default QuestionList;
