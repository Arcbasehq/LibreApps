import { browser } from '$app/environment';

declare global {
	interface Window {
		turnstile?: {
			render: (
				container: HTMLElement,
				options: {
					sitekey: string;
					theme?: 'light' | 'dark' | 'auto';
					action?: string;
					callback?: (token: string) => void;
					'expired-callback'?: () => void;
					'error-callback'?: () => void;
				}
			) => string;
			reset: (widgetId?: string) => void;
			remove: (widgetId: string) => void;
		};
	}
}

let scriptPromise: Promise<void> | null = null;

export function loadTurnstileScript(): Promise<void> {
	if (!browser) return Promise.resolve();
	if (window.turnstile) return Promise.resolve();

	if (!scriptPromise) {
		scriptPromise = new Promise((resolve, reject) => {
			const existing = document.querySelector('script[data-turnstile-script]');
			if (existing) {
				existing.addEventListener('load', () => resolve());
				existing.addEventListener('error', () => reject(new Error('Turnstile script failed')));
				return;
			}

			const script = document.createElement('script');
			script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
			script.async = true;
			script.defer = true;
			script.dataset.turnstileScript = 'true';
			script.onload = () => resolve();
			script.onerror = () => reject(new Error('Turnstile script failed'));
			document.head.appendChild(script);
		});
	}

	return scriptPromise;
}
