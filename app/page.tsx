import { Accordions } from './components/Accordions';
import { Benefits } from './components/Benefits';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { PricingSection } from './components/PricingSection';
import { ReviewSection } from './components/ReviewSection';
import { SimpleStapes } from './components/SimpleStapes';
import { UnlockWorld } from './components/UnlockWorld';

export default function Home() {
	return (
		<>
			<Navigation />
			<Hero />
			<Benefits />
			<UnlockWorld />
			<SimpleStapes />
			<Accordions />
			<ReviewSection />
			<PricingSection />
			<div className='h-screen'></div>
		</>
	);
}
