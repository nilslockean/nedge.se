<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<section transition:fly={{ delay: 2000, y: 30 }}>
		<h2>Frågor?</h2>
		<p><strong>Skicka ett mail till <a href="mailto:hej@nedge.se">hej@nedge.se</a></strong>.</p>
		<p>
			<small>
				<abbr title="Organisationsnummer">Org.nr.</abbr> 559044-7396<br />
				<abbr title="Postadress">Post.</abbr> Bredgatan 2, 222 21 Lund
			</small>
		</p>
		<p>
			<small> Vi utgår ifrån olika arbetsställen och tar ej emot besök på Bredgatan. </small>
		</p>
	</section>
{/if}
