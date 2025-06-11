import * as motion from 'motion/react-client';
import { reviews } from '../utils/Reviews';
import { AnimatedText } from './AnimatedText';
import { Review } from './Review';

export function ReviewSection() {
	return (
		<section className='relative py-24 mx-auto flex flex-col justify-center items-center gap-10 bg-(--bg-bright-pink) lg:gap-14 z-0'>
			<AnimatedText
				as='h1'
				splitBy='words'
				delay={0.5}
				whileInView
				className='text-4xl md:text-5xl mb-5 font-black font-recursive text-center text-(--dark-text) z-10'>
				See Why People Love Spark
			</AnimatedText>
			<motion.div
				initial={{ width: 0 }}
				whileInView={{ width: '80%' }}
				viewport={{ once: true }}
				transition={{
					duration: 0.8,
					delay: 1,
					ease: 'easeIn',
				}}
				className='absolute top-[3.5%] md:top-[7.5%] left-[10%] md:left-[54%] md:max-w-[26%] xl:max-w-[16%] xl:left-[53%] h-18 bg-(--bg-dark-pink) rotate-2 -z-10'></motion.div>

			<div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-4xl'>
				{reviews.map((review, i) => (
					<Review key={i} review={review} />
				))}
				<div className='pointer-events-none absolute inset-x-0 -bottom-2 h-1/2 w-[110%] bg-gradient-to-t from-[#f2dfdd] to-transparent'></div>
			</div>
		</section>
	);
}
