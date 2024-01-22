<script>
	import { onMount } from 'svelte';

	//  Variante 1: funktioniert in allen Frameworks (Svelte, Vue, usw.)
	let data;
	onMount(async () => {
		let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
		data = await response.json();
	});

	// Variante 2: Svelte-spezifisch
	let promise = fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => res.json());
</script>

<div class="prose">
	<h1>Data loaded on the client side (with JS)</h1>
	<h2>Variante 1:</h2>
	<p>{JSON.stringify(data)}</p>

	<h2>Variante 2:</h2>
	{#await promise}
		<div>data loading...</div>
	{:then response}
		<div>{JSON.stringify(response)}</div>
	{/await}
</div>
