<script context="module">
	import Client from './../../utils/client';
	import PrismicDom from 'prismic-dom';

	export async function load({ page }) {
		const { uid } = page.params;
		const document = await Client.getByUID('page', uid);
		return {
			props: {
				document,
				uid
			}
		};
	}
</script>

<script>
	export let document, uid;
	let title = document.data.title[0].text;
</script>

<!-- UID is the parameter for the pages -->
<!-- Can create a layout for blog and blog posts -->
<main>
	<div class="header">
		<h1>{uid}</h1>
	</div>
</main>

<style>
	.header {
		text-align: center;
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
