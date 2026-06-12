<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	export type ResourceItem = {
		href: string;
		label: string;
		detail: string;
		external?: boolean;
	};

	interface Props {
		items: ResourceItem[];
	}
	let { items }: Props = $props();
</script>

<ul class="content-stack list-none">
	{#each items as item (item.href + item.label)}
		<li class="neo-card overflow-hidden p-0">
			<a
				href={item.href}
				target={item.external ? '_blank' : undefined}
				rel={item.external ? 'noopener noreferrer' : undefined}
				class="group flex items-start justify-between gap-4 p-5 transition hover:bg-(--app-panel) sm:p-6"
			>
				<div>
					<p class="font-semibold text-(--app-secondary) group-hover:text-(--app-accent-deep)">
						{item.label}
					</p>
					<p class="mt-1.5 text-sm leading-6 text-(--app-muted)">{item.detail}</p>
				</div>
				<Icon
					name="arrowRight"
					class="mt-1 shrink-0 text-sm leading-none text-(--app-muted) transition group-hover:translate-x-0.5 group-hover:text-(--app-accent-deep)"
				/>
			</a>
		</li>
	{/each}
</ul>
