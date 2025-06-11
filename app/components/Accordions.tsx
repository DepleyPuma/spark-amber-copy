import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../components/ui/accordion';

export function Accordions() {
	return (
		<section className='py-24 mx-auto max-w-4xl flex flex-col justify-center items-center gap-10 lg:gap-14'>
			<Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
				<AccordionItem value='item-1' className='border-(--bg-pink)'>
					<AccordionTrigger className='text-(--pink-text)'>
						1. Unlimited Ideas
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						<p>Generate ideas besed on your specific target market and interests</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2' className='border-(--bg-pink)'>
					<AccordionTrigger className='text-(--pink-text)'>
						2. Wide range of filters
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						<p>
							Filter and refine ideas based on desired features and monetization
							models
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3' className='border-(--bg-pink)'>
					<AccordionTrigger className='text-(--pink-text)'>
						3. In-depth analysis
					</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-4 text-balance'>
						<p>
							Receive in-depth analysis and feasibility reports for each generated
							concept
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</section>
	);
}
