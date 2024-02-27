<script>
	import { supabase } from '$lib/supabase';

	let promise = supabase.from('countries').select('*');
</script>

{#await promise}
	<div>...loading</div>
{:then result}
	<div>{JSON.stringify(result)}</div>
{/await}
