<script>
	import { supabase } from '$lib/supabase';

	let promise = supabase.from('countries').select('*');
</script>

{#await promise}
	<div><span class="loading loading-spinner loading-lg" /></div>
{:then result}
	<ul>
		{#each result.data as country}
			<li>{country.name}</li>
		{/each}
	</ul>
{/await}
