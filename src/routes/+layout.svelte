<script>
	import '../app.postcss';
	let theme = 'cyberpunk';
</script>

<div data-theme={theme} class="min-h-screen p-3">
	<nav class="flex items-center gap-8 m-4">
		<a href="/" class="text-center">Home</a>|
		<a href="/students" class="text-center">Students <br />(Dynamic Routing)</a>|
		<a href="/csr">CSR</a>|
		<a href="/ssr">SSR</a>|
		<a href="/ssr-slow" class="text-center">SSR <br />(slow)</a>|
		<a href="/universal-stream" class="text-center">Universal-Stream</a>
	</nav>

	<select bind:value={theme} class="fixed top-0 right-0">
		<option value="cyberpunk">cyberpunk</option>
		<option value="coffee">coffee</option>
		<option value="synthwave">synthwave</option>
	</select>

	<slot />
</div>
