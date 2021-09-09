<script lang="ts">
	const year = new Date().getFullYear();
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<footer transition:fly={{ delay: 2000 }}>
		<div class="footer-inner">
			<small>&copy; {year} Nedge AB</small>
			<small
				><a href="https://github.com/nilslockean/nedge.se#en-hemsida-utan-extra-fluff"
					>Nedge &#9825; GitHub Pages</a
				></small
			>
		</div>
	</footer>
{/if}

<style>
	footer {
		background: var(--footer-bg-color);
		color: var(--footer-color);
		overflow: hidden;
		padding: var(--base-padding);
		margin-top: 15vh;
	}

	.footer-inner {
		max-width: var(--body-width);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	a,
	a:link,
	a:visited {
		color: var(--footer-link-color);
		text-decoration: none;
	}
	a:hover,
	a:active,
	a:focus {
		text-decoration: underline;
	}
</style>
