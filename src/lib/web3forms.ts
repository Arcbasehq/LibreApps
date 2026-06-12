import { env } from '$env/dynamic/public';
import { SITE_DOMAIN } from '$lib/config';

export type Web3FormsPayload = {
	name: string;
	email: string;
	message: string;
	subject?: string;
	fromName?: string;
};

export async function submitToWeb3Forms(
	payload: Web3FormsPayload
): Promise<{ ok: true } | { ok: false; message: string }> {
	const accessKey = env.PUBLIC_WEB3FORMS_ACCESS_KEY;
	if (!accessKey) {
		return { ok: false, message: 'Contact form is not configured yet.' };
	}

	try {
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				access_key: accessKey,
				name: payload.name,
				email: payload.email,
				message: payload.message,
				subject: payload.subject ?? `Contact · ${payload.name} · ${SITE_DOMAIN}`,
				from_name: payload.fromName ?? `Libre apps (${SITE_DOMAIN})`
			})
		});

		const result = (await response.json()) as { success: boolean; message?: string };

		if (!response.ok || !result.success) {
			return { ok: false, message: result.message ?? 'Something went wrong sending your message.' };
		}

		return { ok: true };
	} catch {
		return { ok: false, message: 'Something went wrong sending your message.' };
	}
}
