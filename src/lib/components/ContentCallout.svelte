<script lang="ts">
	interface Props {
		title: string;
		body: string;
	}
	let { title, body }: Props = $props();
</script>

<aside
	class="neo-card content-callout border-[3px] border-(--app-border) bg-(--app-accent-bright) p-5 shadow-[var(--app-shadow-md)] sm:p-6"
>
	<p
		class="font-(family-name:--font-mono) text-[10px] font-semibold tracking-[0.16em] text-(--app-secondary) uppercase"
	>
		{title}
	</p>
	<p class="mt-2.5 text-sm leading-7 text-(--app-secondary)">{body}</p>
</aside>
