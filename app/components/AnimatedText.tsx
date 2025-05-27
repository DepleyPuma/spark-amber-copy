'use client';

import { animate, stagger } from 'motion/react';
import { splitText } from 'motion-plus';
import { useEffect, useRef } from 'react';

type AnimatedTextProps = {
	children: React.ReactNode;
	splitBy: 'chars' | 'words' | 'lines';
	className?: string;
	as?: React.ElementType;
	delay?: number;
	duration?: number;
};

export function AnimatedText({
	children,
	splitBy = 'words',
	className = '',
	as: Component = 'div',
	delay = 0,
	duration = 1,
}: AnimatedTextProps) {
	const textRef = useRef<HTMLElement>(null);

	useEffect(() => {
		document.fonts.ready.then(() => {
			if (!textRef.current) return;

			const splitResults = splitText(textRef.current);
			const elements = splitResults[splitBy];

			animate(
				elements,
				{ opacity: [0, 1], y: [10, 0] },
				{
					type: 'spring',
					duration,
					bounce: 0,
					delay: stagger(0.15, { startDelay: delay }),
				}
			);
		});
	}, []);

	return (
		<Component ref={textRef} className={className}>
			{children}
		</Component>
	);
}
