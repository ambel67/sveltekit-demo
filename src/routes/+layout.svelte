<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';
	import '../app.postcss';
	import { session, theme } from '$lib/store';

	onMount(() => {
		supabase.auth.getSession().then(({ data }) => {
			$session = data.session;
		});

		supabase.auth.onAuthStateChange((_event, _session) => {
			$session = _session;
		});
	});
</script>

<div data-theme={$theme} class="min-h-screen p-3">
	<nav class="bg-opacity-75 text-white px-4 py-3">
		<div class="flex justify-between items-center max-w-6xl mx-auto">
			<a href="/" class="text-lg font-bold">Home</a>
			<div class="flex gap-8">
				<a href="/login">Login</a>
				<a href="/profile">Profile</a>
			</div>
		</div>
	</nav>

	<select bind:value={$theme} class="fixed top-0 right-0 bg-transparent text-gray-500">
		<option value="synthwave"> synthwave</option>
		<option value="night"> night</option>
		<option value="coffee"> coffee</option>
		<option value="business">business </option>
	</select>

	<slot />
</div>
