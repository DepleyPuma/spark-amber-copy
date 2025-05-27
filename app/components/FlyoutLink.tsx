'use client';

import Link from 'next/link';
import { useState } from 'react';

export const FlyoutLink = ({
	children,
	href,
	isHover,
}: {
	children: React.ReactNode;
	href: string;
	FlyoutContent?: React.ElementType;
	isHover?: boolean;
}) => {
	const [isOpen, setisOpen] = useState(false);

	return (
		<div
			onMouseEnter={() => setisOpen(true)}
			onMouseLeave={() => setisOpen(false)}
			className='relative w-fit h-fit'
		>
			<Link href={href} className='relative text-black'>
				{children}
				<span
					className={`absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-(--bg-pink) transition-transform duration-300 ease-out ${
						isOpen || isHover ? 'scale-x-100' : 'scale-x-0'
					}`}
				/>
			</Link>
		</div>
	);
};
