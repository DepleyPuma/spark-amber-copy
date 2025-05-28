import { Benefits } from './components/Benefits';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { UnlockWorld } from './components/UnlockWorld';

export default function Home() {
	return (
		<>
			<Navigation />
			<Hero />
			<Benefits />
			<UnlockWorld />
			<div className='h-screen'></div>
			<div className='h-screen'></div>
		</>
	);
}
