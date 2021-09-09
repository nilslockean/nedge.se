<script lang="ts">
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import Cards from '$lib/cards.svelte';
	import Cta from '$lib/cta.svelte';
</script>

<svelte:head>
	<title>Nedge AB &bull; Ett litet företag med många talanger</title>
	<meta name="description" content="Nedge AB - Ett litet företag med många talanger." />
</svelte:head>

<Header>
	<p>
		Nedge AB har funnits sedan 2015 och drivs av Lina och Nils Lockean. Vi bedriver verksamhet inom
		webbutveckling, copywriting och klippklättring.
	</p>
</Header>

<main role="main" class="container">
	<Cards />
	<Cta />
</main>

<Footer />

<style>
	main {
		max-width: calc(var(--body-width) * 1.5);
	}
</style>
