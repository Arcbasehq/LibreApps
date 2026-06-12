import { fail, type ActionFailure } from '@sveltejs/kit';
import { isTurnstileConfigured, verifyTurnstileToken } from '$lib/server/turnstile';

const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 4000;

export type ContactFormValues = { name: string; email: string; message: string };

export type ContactFormResult =
	| { success: true }
	| ActionFailure<{ error: string; values: ContactFormValues }>;

function clientAddress(getClientAddress: () => string): string | undefined {
	try {
		return getClientAddress();
	} catch {
		return undefined;
	}
}

export async function processContactForm(
	request: Request,
	getClientAddress: () => string
): Promise<ContactFormResult> {
	try {
		const data = await request.formData();
		const name = String(data.get('name') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();
		const botcheck = data.get('botcheck');
		const turnstileToken = String(data.get('cf-turnstile-response') ?? '');

		if (botcheck) return { success: true };

		const values = { name, email, message };

		if (!name || name.length > MAX_NAME) {
			return fail(400, { error: 'Please enter your name.', values });
		}
		if (!email || email.length > MAX_EMAIL || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return fail(400, { error: 'Please enter a valid email address.', values });
		}
		if (!message || message.length > MAX_MESSAGE) {
			return fail(400, { error: 'Please enter a message (max 4000 characters).', values });
		}

		if (isTurnstileConfigured()) {
			const captcha = await verifyTurnstileToken(turnstileToken, clientAddress(getClientAddress));
			if (!captcha.ok) {
				return fail(400, { error: captcha.message, values });
			}
		}

		return { success: true };
	} catch {
		return fail(500, {
			error: 'Something went wrong. Please try again.',
			values: { name: '', email: '', message: '' }
		});
	}
}
