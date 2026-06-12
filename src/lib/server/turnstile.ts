import { env } from '$env/dynamic/private';

type TurnstileVerifyResponse = {
	success: boolean;
	'error-codes'?: string[];
};

export function isTurnstileConfigured(): boolean {
	return Boolean(env.TURNSTILE_SECRET_KEY);
}

export async function verifyTurnstileToken(
	token: string,
	remoteip?: string
): Promise<{ ok: true } | { ok: false; message: string }> {
	const secret = env.TURNSTILE_SECRET_KEY;
	if (!secret) {
		return { ok: false, message: 'Captcha is not configured on the server.' };
	}

	if (!token) {
		return { ok: false, message: 'Complete the captcha check before sending.' };
	}

	try {
		const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				secret,
				response: token,
				...(remoteip ? { remoteip } : {})
			})
		});

		const result = (await response.json()) as TurnstileVerifyResponse;

		if (!result.success) {
			return { ok: false, message: 'Captcha verification failed. Please try again.' };
		}

		return { ok: true };
	} catch {
		return { ok: false, message: 'Captcha verification failed. Please try again.' };
	}
}
