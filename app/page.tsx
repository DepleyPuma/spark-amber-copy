import { Benefits } from './components/Benefits';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';

export default function Home() {
	return (
		<>
			<Navigation />
			<Hero />
			<Benefits />
		</>
	);
}
