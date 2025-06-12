import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2025-05-28.basil',
	typescript: true,
} as Stripe.StripeConfig);

export async function POST(req: NextRequest) {
	const { priceId } = await req.json();
	const appUrl = process.env.NEXT_PUBLIC_APP_URL;

	if (!priceId) {
		return NextResponse.json({ error: 'Price ID is required' }, { status: 400 });
	}

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: [
				{
					price: priceId,
					quantity: 1,
				},
			],
			mode: 'payment',
			success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${appUrl}/#pricing`,
		});

		return NextResponse.json({ id: session.id });
	} catch (error: unknown) {
		console.error(error);
		let errorMessage = 'An unknown error occurred';
		if (error instanceof Error) {
			errorMessage = error.message;
		}
		return NextResponse.json({ error: errorMessage }, { status: 500 });
	}
}
