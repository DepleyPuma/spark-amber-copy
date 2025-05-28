export function BenefitCards() {
	return (
		<div className='flex flex-col lg:flex-row justify-evenly items-center gap-8 mt-6 text-(--white-text)'>
			<div className='p-8 w-[450px] rounded-lg bg-(--bg-dark-pink)'>
				<h3 className='text-2xl font-bold'>Brainstorming SaaS ideas alone</h3>
				<ul className='mt-4 space-y-1.5 text-xl'>
					<li className="relative pl-6 before:content-['x'] before:absolute before:left-0 before:text-(--white-text) before:font-bold">
						<span>Limited creativity</span>
					</li>
					<li className="relative pl-6 before:content-['x'] before:absolute before:left-0 before:text-(--white-text) before:font-bold">
						<span>Repetitive ideas</span>
					</li>
					<li className="relative pl-6 before:content-['x'] before:absolute before:left-0 before:text-(--white-text) before:font-bold">
						<span>Difficulty market validation</span>
					</li>
					<li className="relative pl-6 before:content-['x'] before:absolute before:left-0 before:text-(--white-text) before:font-bold">
						<span>Time-consuming process</span>
					</li>
				</ul>
			</div>

			<div className='p-8 w-[450px] rounded-lg bg-(--bg-color) text-(--pink-text) translate-x-[-6px] translate-y-[-6px] shadow-[10px_10px_0px_var(--bg-dark-pink)]'>
				<h3 className='text-2xl font-bold'>Brainstorming with Spark</h3>
				<ul className='mt-4 space-y-1.5 text-xl'>
					<li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-(--pink-text) before:font-bold">
						<span>Limited creativity</span>
					</li>
					<li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-(--pink-text) before:font-bold">
						<span>Repetitive ideas</span>
					</li>
					<li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-(--pink-text) before:font-bold">
						<span>Difficulty market validation</span>
					</li>
					<li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-(--pink-text) before:font-bold">
						<span>Time-consuming process</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
