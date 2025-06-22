import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar/index.tsx';
import QuestionList from './components/QuestionList.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Navbar />
		<QuestionList />
	</StrictMode>
);
