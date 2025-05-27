'use client';

import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';
import { Button } from './Button';

export function Hero() {
	const variants = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -200 },
	};

	return (
		<section className='py-24 mx-auto max-w-4xl flex flex-col justify-center items-center gap-10 lg:gap-14'>
			<AnimatedText
				as='h1'
				splitBy='words'
				delay={0.5}
				className='text-4xl md:text-6xl font-black font-recursive text-center text-(--dark-text)'
			>
				Generate Million-Dollar SaaS Ideas in Minutes
			</AnimatedText>
			<AnimatedText
				as='p'
				splitBy='lines'
				duration={2}
				delay={1}
				className='mx-auto max-w-xl text-center text-xl'
			>
				Stuck on ideas? Spark Your Next One! Our AI unleashes killer SaaS ideas you never
				thought of. It's your personal idea machine in your pocket. Time to get sparking!
			</AnimatedText>

			<motion.ul
				initial='hidden'
				whileInView='visible'
				className='list-none space-y-1.5 leading-relaxed font-normal'
			>
				<motion.li
					variants={variants}
					transition={{ delay: 1.2 }}
					className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold"
				>
					<span>Skip the Brainstorming</span>
				</motion.li>
				<motion.li
					variants={variants}
					transition={{ delay: 1.4 }}
					className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold"
				>
					<span>Unique & Profitable Ideas</span>
				</motion.li>
				<motion.li
					variants={variants}
					transition={{ delay: 1.6 }}
					className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold"
				>
					<span>Target Market Specific</span>
				</motion.li>
			</motion.ul>

			<Button
				initial={{ opacity: 0, scale: 0.1 }}
				animate={{ opacity: 1, scale: [0.1, 1] }}
				transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
			>
				Try for free!
			</Button>

			<motion.div
				initial={{ width: 0 }}
				animate={{ width: '80%' }}
				transition={{
					duration: 0.8,
					delay: 1,
					ease: 'easeIn',
				}}
				className='absolute top-[23%] md:top-[17%] md:left-[41%] md:max-w-md h-18 bg-(--bg-pink) -rotate-2 -z-10'
			></motion.div>
		</section>
	);
}
