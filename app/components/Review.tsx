import Image from 'next/image';
import { Reviews } from '../utils/Reviews';

type ReviewProps = {
	review: Reviews;
};

export function Review({ review }: ReviewProps) {
	const { name, text, avatarUrl } = review;

	return (
		<div
			className='bg-[var(--bg-color)] px-6 py-3 rounded-md
    font-semibold text-[var(--pink-text)]
    transition-all duration-300
    translate-x-[-6px] translate-y-[-6px] shadow-[8px_8px_0px_black]
  '
		>
			<div className='flex justify-start items-start gap-3 mb-3'>
				<Image src={avatarUrl} alt={name} width={48} height={48} className='rounded-full' />
				<p className='text-(--pink-text)'>{name}</p>
			</div>
			<p className='text-(--dark-text) text-sm'>{text}</p>
		</div>
	);
}
