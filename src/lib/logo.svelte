<script lang="ts">
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';
	let clazz = '';
	export { clazz as class };
	export let title = 'Nedge AB';

	const polygonPoints = ['5.5,2 23,3.8 23,21.2 ', '26.5,30 9,28.2 9,10.8 '];

	let visible = false;
	onMount(() => {
		visible = true;
	});

	let solid = false;
	const handleDrawEnd = () => {
		solid = true;
	};
</script>

<div class="logo">
	{#if visible}
		<svg
			class={clazz}
			class:solid
			viewBox="0 0 32 32"
			role="img"
			aria-labelledby="logo-title logo-description"
		>
			<title id="logo-title">{title}</title>
			<desc id="logo-description">Nedge ABs logotyp</desc>
			{#each polygonPoints as points}
				<polygon
					transition:draw={{ duration: 1000 }}
					on:introend={() => {
						handleDrawEnd();
					}}
					{points}
				/>
			{/each}
		</svg>
	{/if}
</div>

<style>
	.logo {
		min-height: var(--logo-size);
	}
	svg.solid polygon {
		fill: var(--logo-color);
		stroke-width: 0;
	}
	svg {
		max-width: var(--logo-size);
		height: auto;
		transition: max-width 0.2s;
	}
	svg polygon {
		fill: transparent;
		stroke-width: 0.5px;
		stroke: var(--logo-color);
		stroke-dasharray: none;
		stroke-linecap: butt;
		stroke-linejoin: miter;
		transition: fill 0.4s;
	}
</style>
