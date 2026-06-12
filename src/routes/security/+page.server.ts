import { processContactForm } from '$lib/server/contact-form';
import type { Actions } from './$types';

export const actions = {
	report: async (event) => processContactForm(event.request, event.getClientAddress)
} satisfies Actions;
