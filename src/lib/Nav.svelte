<script>
	import links from '../../utils/navLinks';
</script>

<nav class="container">
	<div class="menu">
		{#each links as link}
			<a href={link.path}>{link.text}</a>
		{/each}
	</div>
</nav>

<style>
	nav {
		width: 100%;
		padding-top: 25px;
		padding-bottom: 25px;
		text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8), 0px 0px 6px rgba(0, 0, 0, 0.8);
	}

	nav a {
		color: white;
		text-decoration: none;
		padding-right: 1rem;
		text-transform: uppercase;
	}
</style>
