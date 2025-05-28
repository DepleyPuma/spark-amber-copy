import * as motion from 'motion/react-client';
import { BenefitCards } from './BenefitCards';
import { AnimatedText } from './AnimatedText';

export function Benefits() {
	return (
		<section className='relative py-24 mx-auto flex flex-col justify-center items-center gap-10 bg-(--bg-pink) lg:gap-14'>
			<div className='absolute -top-[10%] bg-(--bg-pink) h-40 rotate-3 w-[110%] -z-10 '></div>
			<div className='absolute -bottom-[10%] bg-(--bg-pink) h-40 rotate-3 w-[110%] -z-10 '></div>

			<AnimatedText
				as='h1'
				splitBy='words'
				whileInView
				className='text-3xl md:text-5xl max-w-2xl font-black font-recursive text-center text-(--white-text) z-20'
			>
				Struggling to come up with Profitable SaaS Ideas?
			</AnimatedText>
			{/* <h1 className='text-3xl md:text-5xl max-w-2xl font-black font-recursive text-center text-(--white-text) z-20'>
				Struggling to come up with Profitable SaaS Ideas?
			</h1> */}
			<motion.div
				initial={{ width: 0 }}
				whileInView={{ width: '80%' }}
				transition={{
					duration: 0.8,
					delay: 0.2,
					ease: 'easeIn',
				}}
				className='absolute top-[11%] left-[11%] md:top-[15%] md:left-[20%] lg:top-[23%] lg:left-[35%] md:max-w-xl h-18 bg-(--bg-dark-pink) -rotate-2 z-10'
			></motion.div>

			<BenefitCards />
		</section>
	);
}
