<script context="module">
	import Client from './../../utils/client';
	import PrismicDom from 'prismic-dom';

	export async function load() {
		const document = await Client.getByUID('page', 'homepage');
		return {
			props: {
				document
			}
		};
	}
</script>

<script>
	export let document;
	let title = document.data.title[0].text;
</script>

<main>
	<div class="header container" style="background-image: url('{document.data.image.url}')">
		<h1>
			{title}
		</h1>
	</div>
	<div class="container">
		<div class="text">
			{@html PrismicDom.RichText.asHtml(document.data.content)}
		</div>
	</div>
</main>

<style>
	.header {
		text-align: center;
		color: white;
		background-size: cover;
		min-height: 25vw;
		padding-top: 2rem;
		justify-content: flex-end;
		background-position: bottom;
	}
	h1 {
		padding-bottom: 4rem;
	}
</style>
