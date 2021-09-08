<script lang="ts">
	let clazz = '';
	export { clazz as class };
	export let title = 'Nedge AB';
</script>

<svg class={clazz} viewBox="0 0 32 32" role="img" aria-labelledby="logo-title logo-description">
	<title id="logo-title">{title}</title>
	<desc id="logo-description">Nedge ABs logotyp</desc>
	<polygon id="top" points="5.5,2 23,3.8 23,21.2 " />
	<polygon id="bottom" points="26.5,30 9,28.2 9,10.8 " />
</svg>

<style>
	svg {
		max-width: var(--logo-size);
		height: auto;
		transition: max-width 0.2s;
	}
	svg polygon {
		fill: var(--logo-color);
		transition: fill 0.2s;
	}
</style>
