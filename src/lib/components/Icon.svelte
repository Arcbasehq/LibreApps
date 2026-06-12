<script lang="ts">
	const icons: Record<string, string> = {
		shield: 'fa-shield-halved',
		lock: 'fa-lock',
		eyeOff: 'fa-eye-slash',
		search: 'fa-magnifying-glass',
		code: 'fa-code',
		globe: 'fa-globe',
		zap: 'fa-bolt',
		mail: 'fa-envelope',
		arrowRight: 'fa-arrow-right',
		check: 'fa-check',
		server: 'fa-server',
		users: 'fa-users',
		chevronDown: 'fa-chevron-down',
		externalLink: 'fa-arrow-up-right-from-square',
		bars: 'fa-bars',
		xmark: 'fa-xmark',
		plus: 'fa-plus',
		github: 'fa-github',
		mastodon: 'fa-mastodon',
		xTwitter: 'fa-x-twitter'
	};

	const brands = new Set(['github', 'mastodon', 'xTwitter']);

	interface Props {
		name: keyof typeof icons | string;
		class?: string;
	}
	let { name, class: className = 'text-base leading-none' }: Props = $props();

	const faIcon = $derived(icons[name] ?? 'fa-circle-question');
	const styleClass = $derived(brands.has(name) ? 'fa-brands' : 'fas');
</script>

<i class="{styleClass} {faIcon} {className}" aria-hidden="true"></i>
