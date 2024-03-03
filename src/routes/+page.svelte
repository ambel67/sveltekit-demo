<script>
	import { supabase } from '$lib/supabase.js';

	let promise = supabase.from('countries').select();
</script>

{#await promise}
	<div><span class="loading loading-dots loading-md" /></div>
{:then result}
	<ul>
		{#each result.data as country}
			<li>{country.name}</li>
		{/each}
	</ul>
{/await}
