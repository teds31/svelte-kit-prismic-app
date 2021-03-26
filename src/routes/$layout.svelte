<script>
	import './../styles/reset.css';
	import './../styles/global.css';
	import Nav from '$lib/Nav.svelte';
</script>

<div class="flex-layout">
	<header class="absolute">
		<Nav />
	</header>
	<slot />
	<p class="footer">© SimpleCoin, 2020</p>
</div>

<style>
	.absolute {
		position: absolute;
		width: 100%;
	}

	.footer {
		margin: 3rem 0;
		text-align: center;
	}

	.flex-layout {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
