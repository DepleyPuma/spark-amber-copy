'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { FlyoutLink } from './FlyoutLink';

export function Navigation() {
	const [isHover, setIsHover] = useState(false);

	return (
		<motion.nav
			initial={{ y: -250 }}
			animate={{ y: 0 }}
			transition={{
				delay: 0.2,
			}}
			className='container mx-auto px-4 pt-4 pb-2 border-b-2 border-(--bg-pink)'
		>
			<ul className='flex justify-between items-center'>
				<li className='flex justify-center items-center gap-2'>
					<motion.a
						href='#'
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
						className='text-2xl cursor-pointer'
						initial={{ scale: 0.7 }}
						animate={{ scale: 1.2 }}
						transition={{
							repeat: Infinity,
							repeatType: 'reverse',
							duration: 1.5,
							ease: 'easeInOut',
						}}
					>
						✨
					</motion.a>
					<FlyoutLink href='#' isHover={isHover}>
						Spark
					</FlyoutLink>
				</li>
				<div className='flex gap-10'>
					<li>
						<FlyoutLink href='#pricing'>Pricing</FlyoutLink>
					</li>
					<li>
						<FlyoutLink href='#faq'>FAQ</FlyoutLink>
					</li>
				</div>
				<li>
					<button className='bg-(--bg-pink) px-4 py-2 rounded-md font-semibold text-(--pink-text) transition-all duration-300 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[8px_8px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none cursor-pointer'>
						Login
					</button>
				</li>
			</ul>
		</motion.nav>
	);
}
