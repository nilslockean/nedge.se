<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { CardInfo } from '../types';
	export let info: CardInfo;
	export let delay: number;

	const { style, name, title, job, url, linkText } = info;
	export let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<article {style} transition:fly={{ delay, y: 30 }}>
		<div>
			<h2>
				{name}
				{#if title}<sup>VD</sup>{/if}
			</h2>
			<p>{job}</p>
		</div>

		<a href={url.href}>{linkText || url.hostname}</a>
	</article>
{/if}

<style>
	article {
		--border-width: 1px;
		border-radius: 0.5rem;
		min-height: 200px;
		padding: 1rem;
		display: flex;
		flex-flow: column;
		flex-wrap: nowrap;
		justify-content: space-between;
		position: relative;
		box-sizing: border-box;
		transition: min-height 0.2s, border-color 0.2s;
		border: var(--border-width) solid;
		background: var(--main-bg-color);
		color: var(--main-color);
	}

	article:hover {
		border-color: var(--main-link-hover-color);
	}

	article h2 {
		margin: 0.5rem 0;
	}

	article h2 + p {
		margin-top: 0;
	}

	article a:after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
		pointer-events: auto;
		content: '';
		background-color: rgba(0, 0, 0, 0);
	}
</style>
