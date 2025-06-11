import * as motion from 'motion/react-client';
import { AnimatedText } from './AnimatedText';
import { Advantage } from './Advantage';

export function UnlockWorld() {
	return (
		<section className='relative py-32 mx-auto max-w-4xl flex flex-col justify-center items-center gap-10 lg:gap-14'>
			<AnimatedText
				as='h1'
				splitBy='words'
				whileInView
				className='text-3xl md:text-5xl font-black font-recursive text-center z-20'
			>
				Unlock a World of Profitable SaaS Ideas
			</AnimatedText>
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: '80%' }}
				transition={{
					duration: 0.8,
					delay: 1,
					ease: 'easeIn',
				}}
				className='absolute top-[11%] left-[8%] md:left-[3%] md:max-w-[21%] h-18 bg-(--bg-pink) -rotate-2 -z-10'
			></motion.div>

			<p className='text-center text-(--dark-text) font-medium'>
				Spark ignites your imagination with intelligent tools. Explore features designed to
				help you conquer brainstorming challenges and validate your SaaS ideas
			</p>

			<Advantage
				header='Spark Creativity'
				text="Break through brainstorming roadblocks and generate innovative SaaS ideas you never
				thought of on your own. Spark's AI-powered engine ignites your creativity and helps
				you discover hidden gems."
			/>
			<Advantage
				header='Validate & Refine'
				text="Don't waste time on ideas that won't fly. Spark provides market data and feasibility analysis to help you validate your concepts and refine them for maximum impact."
			/>
			<Advantage
				header='Streamlined Process'
				text='Say goodbye to endless brainstorming sessions. Spark simplifies the idea generation process, allowing you to focus on what matters most – bringing your next big SaaS product to life.'
			/>
		</section>
	);
}
