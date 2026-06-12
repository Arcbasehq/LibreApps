import { processContactForm } from '$lib/server/contact-form';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => processContactForm(event.request, event.getClientAddress)
} satisfies Actions;
