<script lang="ts">
	import '../index.css';
	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>Nedge AB &bull; Ett litet företag med många talanger</title>
	<meta name="description" content="Nedge AB - Ett litet företag med många talanger." />
</svelte:head>

<header>
	<h1>
		<svg
			version="1.1"
			id="logo"
			x="0px"
			y="0px"
			viewBox="0 0 32 32"
			xml:space="preserve"
			role="img"
			aria-labelledby="logo-title logo-description"
		>
			<title id="logo-title">Nedge AB</title>
			<desc id="logo-description">Nedge ABs logotyp</desc>
			<polygon id="top" points="5.5,2 23,3.8 23,21.2 " />
			<polygon id="bottom" points="26.5,30 9,28.2 9,10.8 " />
		</svg>
	</h1>
	<p class="tagline">Ett litet företag med många talanger</p>
	<!-- <nav role="navigation" aria-label="Main navigation">
			<ul>
				<li><a href="#team">Vi på Nedge</a></li>
				<li><a href="#kontakt">Kontakt</a></li>
			</ul>
		</nav> -->
	<p>
		Nedge AB har funnits sedan 2015 och drivs av Lina och Nils Lockean. Vi bedriver verksamhet inom
		webbutveckling, copywriting och klippklättring.
	</p>
</header>

<main role="main">
	<section id="verksamheter" class="grid">
		<div class="card lina">
			<div>
				<h2>Lina Lockean <sup>VD</sup></h2>
				<p>Copywriting</p>
			</div>

			<a href="https://linalockean.se/">linalockean.se</a>
		</div>

		<div class="card nils">
			<div>
				<h2>Nils Lockean</h2>
				<p>Webbutveckling</p>
			</div>
			<a href="https://nilslockean.com/">nilslockean.se</a>
		</div>

		<div class="card felix">
			<div>
				<h2>Felix Hofwimmer</h2>
				<p>Webbutveckling</p>
			</div>
			<a href="https://se.linkedin.com/in/felixhofwimmer">LinkedIn</a>
		</div>

		<div class="card dubbel8">
			<div>
				<h2>Dubbel8</h2>
				<p>Reko klätterubblevelser på Skånes klippor</p>
			</div>
			<a href="https://dubbel8.se">dubbel8.se</a>
		</div>

		<!-- <div class="card onum">
			<div>
				<h2>Onum</h2>
				<p>Möbelrenovering</p>
			</div>
			<a href="https://onum.se">onum.se</a>
		</div> -->
	</section>

	<section id="kontakt">
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
</main>

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
