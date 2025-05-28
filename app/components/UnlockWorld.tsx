import * as motion from 'motion/react-client';
import { AnimatedText } from './AnimatedText';

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
				className='absolute top-[34%] left-[8%] md:left-[3%] md:max-w-[21%] h-18 bg-(--bg-pink) -rotate-2 -z-10'
			></motion.div>
		</section>
	);
}
