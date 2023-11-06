<script>
	import '../app.postcss';
	let theme = 'cyberpunk';
</script>

<div data-theme={theme} class="min-h-screen">
	<nav>
		<a href="/">home</a>
		<a href="/about">about</a>
		<a href="/students">students</a>
	</nav>

	<select bind:value={theme} class="fixed top-0 right-0">
		<option value="cyberpunk">cyberpunk</option>
		<option value="coffee">coffee</option>
		<option value="synthwave">synthwave</option>
	</select>

	<slot />
</div>
