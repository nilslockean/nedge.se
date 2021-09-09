<script context="module">
	export function load({ error: { message }, status }) {
		return {
			props: {
				status,
				message
			}
		};
	}
</script>

<script>
	import Header from '$lib/header.svelte';
	export let status;
	export let message;

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
		<p><small>{status}: {message}</small></p>
	</Header>
{/if}
