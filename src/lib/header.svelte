<script lang="ts">
	import Logo from '$lib/logo.svelte';
	export let tagline = 'Ett litet företag med många talanger';
</script>

<header class="container">
	<h1>
		<Logo />
	</h1>
	<p class="tagline">{tagline}</p>
	<slot />
</header>

<style>
	header {
		margin-top: 3rem;
	}
</style>
