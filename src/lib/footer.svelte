<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="footer-inner">
		<small>&copy; {year} Nedge AB</small>
		<small
			><a href="https://github.com/nilslockean/nedge.se#en-hemsida-utan-extra-fluff"
				>Nedge &#9825; GitHub Pages</a
			></small
		>
	</div>
</footer>

<style>
	footer {
		background: var(--footer-bg-color);
		color: var(--footer-color);
		overflow: hidden;
		padding: var(--base-padding);
		margin-top: 15vh;
	}

	.footer-inner {
		max-width: var(--body-width);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	a,
	a:link,
	a:visited {
		color: var(--footer-link-color);
		text-decoration: none;
	}
	a:hover,
	a:active,
	a:focus {
		text-decoration: underline;
	}
</style>
