'use client';

import { Button } from '../components/Button';
import Link from 'next/link';

export default function SuccessPage() {
	return (
		<main className='flex flex-col items-center justify-center min-h-screen text-center'>
			<div className='bg-white p-10 rounded-lg shadow-lg max-w-md'>
				<h1 className='text-3xl font-bold text-(--bg-dark-pink) mb-4'>
					Payment Successful!
				</h1>
				<p className='text-gray-700 mb-6'>
					Thank you for your purchase. You now have access to all the premium features.
				</p>
				<p className='text-gray-500 text-sm mb-8'>
					A confirmation has been sent to your email. If you have any questions, please
					contact our support.
				</p>
				<Link href='/'>
					<Button>Go back to Homepage</Button>
				</Link>
			</div>
		</main>
	);
}
