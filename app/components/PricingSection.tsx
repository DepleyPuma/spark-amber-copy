'use client';

import { AnimatedText } from './AnimatedText';
import { Button } from './Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { CreditCard } from 'lucide-react';

export function PricingSection() {
	return (
		<section className='relative py-24 mx-auto max-w-3xl flex flex-col justify-center items-center gap-10 lg:gap-14'>
			<AnimatedText
				as='h1'
				splitBy='words'
				delay={0.5}
				className='text-4xl md:text-5xl font-black font-recursive text-center text-(--dark-text)'
			>
				Find the Perfect Plan for YOU
			</AnimatedText>

			<div className='grid gap-8 md:grid-cols-2'>
				<Card className='w-full max-w-md bg-(--white-text)'>
					<CardHeader>
						<CardTitle>Basic</CardTitle>
						<CardDescription>
							The essential tools and filters to generate SaaS ideas.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<h3 className='flex justify-start items-end gap-1 text-5xl font-extrabold'>
							<span className='text-lg text-gray-500 font-[600] line-through'>
								$35
							</span>
							<span>$15</span>
							<span className='text-base font-[600]'>USD</span>
						</h3>

						<ul className='mt-8 space-y-3 text-xl'>
							<li className="relative pl-6 text-sm before:content-['✓']  before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>
									5 idea generations per day
								</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓']  before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>All categories</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓']  before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>3 parameters</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓']  before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>Basic filters</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓']  before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>Custom category prompts</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['x'] before:absolute before:left-0 before:text-(--dark-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>
									ChatGPT Prompts for coding generated ideas
								</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['x'] before:absolute before:left-0 before:text-(--dark-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>
									Step-by-step guide for coding ideas
								</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['x'] before:absolute before:left-0 before:text-(--dark-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>Business model proposal</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['x'] before:absolute before:left-0 before:text-(--dark-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>Lifetime updates</span>
							</li>
						</ul>
					</CardContent>
					<CardFooter className='flex flex-col gap-3'>
						<Button className='flex justify-center items-center w-full gap-2 rounded-xl'>
							Buy <CreditCard />
						</Button>
						<p className='text-xs text-(--dark-text) opacity-75'>
							Pay once. Acces forever.
						</p>
					</CardFooter>
				</Card>

				<Card className='w-full max-w-md bg-(--white-text)'>
					<CardHeader>
						<CardTitle>Basic</CardTitle>
						<CardDescription>
							The essential tools and filters to generate SaaS ideas.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<h3 className='flex justify-start items-end gap-1 text-5xl font-extrabold'>
							<span className='text-lg text-gray-500 font-[600] line-through'>
								$100
							</span>
							<span>$49</span>
							<span className='text-base font-[600]'>USD</span>
						</h3>

						<ul className='mt-8 space-y-3 text-xl'>
							<li className="relative pl-6 text-sm before:content-['✓']  before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>
									Unlimited idea generations
								</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓']  before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>All categories</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓']  before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>25+ parameters</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓']  before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>All filters</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓']  before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>Custom category prompts</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓'] before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>
									ChatGPT Prompts for coding generated ideas
								</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓'] before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>
									Step-by-step guide for coding ideas
								</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓'] before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>Business model proposal</span>
							</li>
							<li className="relative pl-6 text-sm before:content-['✓'] before:absolute before:left-0 before:text-(--pink-text) before:font-bold opacity-75">
								<span className='text-(--dark-text)'>Lifetime updates</span>
							</li>
						</ul>
					</CardContent>
					<CardFooter className='flex flex-col gap-3'>
						<Button className='flex justify-center items-center w-full gap-2 rounded-xl'>
							Buy <CreditCard />
						</Button>
						<p className='text-xs text-(--dark-text) opacity-75'>
							Pay once. Acces forever.
						</p>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
}
