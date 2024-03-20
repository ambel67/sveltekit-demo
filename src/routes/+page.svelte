<script>
	import { supabase } from '$lib/supabase.js';

	let promise = supabase.from('countries').select();
	let names = supabase.from('rabbits').select();

	let name = '';

	async function sendName() {
		const response = await fetch('/api/sendName', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name })
		});

		const data = await response.text();
		console.log(data);

		name = '';
		names = supabase.from('rabbits').select();
	}
</script>

<div class="prose">
	<h1>APIs</h1>
	<ul>
		<li><a href="/api/hello?name=Markus">Link zur API mit Query-Paranter</a></li>
		<li><a href="/api/hello/Markus">Link zur API mit Route-Paranter</a></li>
	</ul>

	<form>
		<h2>All my rabbits</h2>
		<input type="text" bind:value={name} /> <br />
		<button class="btn" on:click={sendName}>Add rabbit!</button>
	</form>

	<h2>Rabbit names</h2>

	{#await names}
		<span class="laoding loading-bars loading-lg text-primary" />
	{:then result}
		<ul>
			{#each result.data as rabbit (rabbit.id)}
				<li>{rabbit.name}</li>
			{/each}
		</ul>
	{/await}
</div>

<div class="container mx-auto py-8">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<h1 class="text-2xl font-semibold mb-4">Aufgaben:</h1>
			<ul>
				<li>
					Erstelle eine Liste aller Länder basierend auf einem JS-Objekt, das auf einer Seite
					dargestellt wird.
				</li>
				<li>Integriere einen Lade-Spinner oder ähnliches von DaisyUI in dein Projekt.</li>
				<li>Gib die Vercel-URL zu deinem Projekt via Aufgabe im Teams ab.</li>
			</ul>
		</div>

		<div>
			{#await promise}
				<div class="loading-spinner">
					<div
						class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"
					/>
				</div>
			{:then result}
				<h2 class="text-xl font-semibold mb-4">Liste aller Länder:</h2>
				<ul class="country-list">
					{#each result.data as country}
						<li>{country.name}</li>
					{/each}
				</ul>
			{/await}
		</div>
	</div>
</div>

<style>
	.loading-spinner {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200px;
	}

	.country-list {
		margin-top: 1.5rem;
	}

	.country-list li {
		margin-bottom: 0.5rem;
	}
</style>
