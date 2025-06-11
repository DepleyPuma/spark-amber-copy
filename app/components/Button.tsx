// components/Button.tsx
import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

// HTMLMotionProps<'button'> zawiera:
// - Standardowe atrybuty HTML dla elementu <button> (np. onClick, type, disabled)
// - Propsy Framer Motion (np. initial, animate, variants, whileHover, whileTap)
// - `children`
//
// Jeśli chcesz dodać jakieś własne, specyficzne propsy dla tego komponentu,
// możesz je zdefiniować osobno i połączyć:
// type CustomButtonSpecificProps = { myCustomProp?: string; };
// type ButtonProps = CustomButtonSpecificProps & HTMLMotionProps<'button'>;

type ButtonProps = HTMLMotionProps<'button'> & { isBackGroundNone?: boolean };

export function Button({ children, isBackGroundNone, className, ...restProps }: ButtonProps) {
	const baseClassName = `
    ${isBackGroundNone ? 'bg-[var(--bg-white)] border-2 border-[var(--bg-pink)] hover:bg-[var(--bg-pink)] hover:text-[var(--dark-text)]' : 'bg-[var(--bg-pink)]'} px-6 py-3 rounded-md
    font-semibold text-[var(--pink-text)]
    transition-all duration-300
    hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[8px_8px_0px_black]
    active:translate-x-[0px] active:translate-y-[0px] active:shadow-none
    cursor-pointer
  `;

	// Łączenie bazowych klas z klasami przekazanymi przez props `className`
	const combinedClassName = `${baseClassName} ${className || ''}`.replace(/\s+/g, ' ').trim();

	return (
		<motion.button className={combinedClassName} {...restProps}>
			{children}
		</motion.button>
	);
}
