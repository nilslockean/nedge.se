<script lang="ts">
	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';
	type Card = {
		name: string;
		title?: string;
		job: string;
		url: URL;
		linkText?: string;
		style?: string;
	};

	const cards: Card[] = [
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
	{#each cards as { name, title, job, url, linkText, style }}
		<article {style} transition:fade={{ delay: 1000 }}>
			<div>
				<h2>
					{name}
					{#if title}<sup>VD</sup>{/if}
				</h2>
				<p>{job}</p>
			</div>

			<a href={url.href}>{linkText || url.hostname}</a>
		</article>
	{/each}
</section>

<style>
	section {
		margin-bottom: 1rem;
		text-align: left;
	}

	article {
		--border-width: 1px;
		border-radius: 0.5rem;
		min-height: 200px;
		padding: 1rem;
		display: flex;
		flex-flow: column;
		flex-wrap: nowrap;
		justify-content: space-between;
		position: relative;
		box-sizing: border-box;
		transition: min-height 0.2s, border-color 0.2s;
		border: var(--border-width) solid;
		background: var(--main-bg-color);
		color: var(--main-color);
	}

	article:hover {
		border-color: var(--main-link-hover-color);
	}

	article h2 {
		margin: 0.5rem 0;
	}

	article h2 + p {
		margin-top: 0;
	}

	article a:after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
		pointer-events: auto;
		content: '';
		background-color: rgba(0, 0, 0, 0);
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
			article {
				min-height: 300px;
			}
		}

		@media (min-width: 1220px) {
			section {
				--width: calc(100vw - (6 * var(--base-padding)));
			}

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
