'use client';

import { Button } from './Button';

type AdvantageProps = {
	header: string;
	text: string;
};

export function Advantage({ header, text }: AdvantageProps) {
	return (
		<div className='px-3'>
			<div className='bg-(--bg-gray) p-3 px-5 w-full text-lg rounded-xl'>{header}</div>
			<p className='mt-4 mb-5 px-2 text-(--dark-text)'>{text}</p>
			<Button isBackGroundNone>Try it out!</Button>
		</div>
	);
}
