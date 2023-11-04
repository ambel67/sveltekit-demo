<script>
	import '../app.postcss';
	let theme = 'cupcake';
</script>

<div data-theme={theme} class="min-h-screen">
	<select bind:value={theme} class="fixed right-0">
		<option value="cupcake">Cupcake</option>
		<option value="synthwave">Synthwave</option>
		<option value="cyberpunk">Cyberpunk</option>
	</select>
	<slot />
</div>
