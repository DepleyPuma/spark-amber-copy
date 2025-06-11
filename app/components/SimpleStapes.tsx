import * as motion from 'motion/react-client';
import { AnimatedText } from './AnimatedText';

export function SimpleStapes() {
	return (
		<section className='relative py-12 mx-auto max-w-4xl flex flex-col justify-center items-center gap-10 lg:gap-14'>
			<AnimatedText
				as='h1'
				splitBy='words'
				whileInView
				className='text-3xl md:text-5xl font-black font-recursive text-center z-20 px-10'
			>
				Generate the best SaaS ideas in 3 Simple Steps
			</AnimatedText>
			<motion.div
				initial={{ width: 0 }}
				whileInView={{ width: '80%' }}
				transition={{
					duration: 0.8,
					delay: 1,
					ease: 'easeIn',
				}}
				className='absolute top-[22%] md:top-[45%] left-[8%] md:left-[29%] md:max-w-[43%] h-18 bg-(--bg-pink) rotate-3 -z-10'
			></motion.div>
		</section>
	);
}
