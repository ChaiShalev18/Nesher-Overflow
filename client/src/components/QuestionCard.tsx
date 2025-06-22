// File: src/components/question/QuestionCard.tsx
import { CalendarToday, ThumbUp } from '@mui/icons-material';
import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';

interface Question {
	id: string;
	title: string;
	votes: number;
	createdAt: string;
}

interface QuestionCardProps {
	question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
	return (
		<Card
			onClick={() => console.log(`/question/${question.id}`)}
			sx={{
				textDecoration: 'none',
				'&:hover': { boxShadow: 3 },
				backgroundColor: '#fffdf7',
				border: '1px solid #f8b14d',
				transition: 'box-shadow 0.2s',
			}}
		>
			<CardContent>
				<Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
					{question.title}
				</Typography>

				<Stack direction="row" spacing={2} alignItems="center">
					<Chip
						icon={<ThumbUp />}
						label={`${question.votes} הצבעות`}
						size="small"
						sx={{ bgcolor: '#ffe0b2', color: '#4b2e05' }}
					/>
					<Chip
						icon={<CalendarToday />}
						label={new Date(question.createdAt).toLocaleDateString()}
						size="small"
						sx={{ bgcolor: '#e0f2f1', color: '#00695c' }}
					/>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default QuestionCard;
