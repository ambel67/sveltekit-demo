<script>
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	let data;

	onMount(async () => {
		let response = await fetch('https://jsonplaceholder.typicode.com/posts');
		data = await response.json();
	});
</script>

<h1>this is client side loaded data:</h1>
<p>{JSON.stringify(data)}</p>
