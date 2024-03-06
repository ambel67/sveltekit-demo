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
	<nav class="flex items-center gap-8 m-4">
		<a href="/" class="text-center">Home</a>
		<a href="/login" class="text-center">Login</a>
		<a href="/profile" class="text-center">Profile</a>
	</nav>

	<select bind:value={$theme} class="fixed top-0 right-0">
		<option value="synthwave"> synthwave</option>
		<option value="night"> night</option>
		<option value="coffee"> coffee</option>
		<option value="lemonade"> lemonade</option>
	</select>

	<slot />
</div>
