<script>
	import '../app.postcss';
	let theme = 'night';
</script>

<div data-theme={theme} class="min-h-screen">
	<nav>
		<a href="/">home</a>
		<a href="/about">about</a>
		<a href="/students">students</a>
	</nav>

	<select bind:value={theme} class="fixed top-0 right-0">
		<option value="light"> light</option>
		<option value="night"> night</option>
		<option value="coffee"> coffee</option>
		<option value="lemonade"> lemonade</option>
		<option value="cmyk"> cmyk</option>
		<option value="bussiness"> business</option>
		<option value="dracula"> dracula</option>
	</select>

	<slot />
</div>
