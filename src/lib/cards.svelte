<script lang="ts">
	import type { CardInfo } from '../types';
	import Card from './card.svelte';

	const cards: CardInfo[] = [
		{
			name: 'Lina Lockean',
			title: 'VD',
			job: 'Copywriting',
			url: new URL('https://linalockean.se/'),
			style: `
				--main-bg-color: #b0bce8;
				--main-color: #870c25;
				--main-link-color: var(--main-color);
				--main-link-hover-color: #401;
				--main-heading-color: var(--main-color);
				--border-width: 0px;
			`
		},
		{
			name: 'Nils Lockean',
			job: 'Webbutveckling',
			url: new URL('https://nilslockean.se'),
			style: `
				--main-bg-color: var(--mint-cream);
				--main-color: var(--hunter-green);
				--main-link-color: var(--main-color);
				--main-link-hover-color: var(--phtalo-green);
				--main-heading-color: var(--main-color);
			`
		},
		{
			name: 'Felix Hofwimmer',
			job: 'Webbutveckling',
			url: new URL('https://se.linkedin.com/in/felixhofwimmer'),
			linkText: 'LinkedIn'
		},
		{
			name: 'Dubbel8',
			job: 'Reko klätterubblevelser på Skånes klippor',
			url: new URL('https://dubbel8.se'),
			style: `
				--main-bg-color: #fc0;
				--main-color: #000;
				--main-link-color: #224;
				--main-link-hover-color: #000;
				--main-heading-color: var(--main-color);
				--border-width: 0px;
			`
		},
		{
			name: 'Onum',
			job: 'Möbelrenovering',
			url: new URL('https://onum.se'),
			style: `
				--main-bg-color: #f3ebde;
				--main-color: #6c2334;
				--main-link-color: #6c2334;
				--main-link-hover-color: #000;
				--main-heading-color: var(--main-color);
				--border-width: 0px;
			`
		}
	];

	// <div class="card onum">
	//   <div>
	//     <h2>Onum</h2>
	//     <p>Möbelrenovering</p>
	//   </div>
	//   <a href="https://onum.se">onum.se</a>
	// </div>
</script>

<section>
	{#each cards as info, i}
		<Card {info} delay={1200 + i * 100} />
	{/each}
</section>

<style>
	section {
		margin-bottom: 1rem;
		text-align: left;
	}

	@supports (display: grid) {
		section {
			--width: calc(100vw - (2 * var(--base-padding)));
			width: calc(var(--width));
			position: relative;
			left: calc((var(--width) * -0.5) + 50%);
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			grid-gap: 1rem;
		}

		@media (min-width: 880px) {
			section {
				--width: calc(100vw - (4 * var(--base-padding)));
			}
			section,
			article {
				min-height: 300px;
			}
		}

		@media (min-width: 1220px) {
			section {
				--width: calc(100vw - (6 * var(--base-padding)));
			}

			section,
			article {
				min-height: 400px;
			}
		}

		@media (min-width: 2200px) {
			section {
				--width: 2000px;
			}
		}
	}
</style>
