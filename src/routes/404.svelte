<script>
	import Header from '$lib/header.svelte';

	let visible = true;
	const handleClick = () => {
		visible = false;
	};
</script>

<svelte:head>
	<title>Sidan hittades inte</title>
</svelte:head>

{#if visible}
	<Header tagline="Sidan hittades inte" transition={false}>
		<p>
			Men du kan hitta mer information om våra respektive verksamheter via länkarna på <a
				on:click={handleClick}
				href="/">startsidan</a
			>.
		</p>
	</Header>
{/if}
