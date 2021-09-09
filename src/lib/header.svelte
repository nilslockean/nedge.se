<script lang="ts">
	import Logo from '$lib/logo.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	export let transition = true;
	let visible = !transition;
	onMount(() => {
		visible = true;
	});
	export let tagline = 'Ett litet företag med många talanger';
</script>

<header class="container">
	<h1>
		<Logo {transition} />
	</h1>
	{#if visible}
		<div transition:fly={{ delay: 1000, y: 30 }}>
			<p class="tagline">{tagline}</p>
			<slot />
		</div>
	{/if}
</header>

<style>
	header {
		margin-top: 3rem;
	}
</style>
