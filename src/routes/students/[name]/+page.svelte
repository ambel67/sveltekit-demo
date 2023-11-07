<script>
	import { page } from '$app/stores';
	export let data;
</script>

<div data-theme={$page.params.name === 'maco' ? 'luxury' : null}>
	<h1>{$page.params.name[0].toUpperCase() + $page.params.name.slice(1)}s Homepage</h1>

	<p>$page.url: {JSON.stringify($page.url)}</p>
	<p>$page.route: {JSON.stringify($page.route)}</p>
	<p>$page.params: {JSON.stringify($page.params)}</p>

	<hr class="my-4" />

	<h1>Data Loading:</h1>
	<p>quick top level data: {data.quick}</p>
	<p>data from public api: {JSON.stringify(data.users)}</p>

	{#await data.streamed.message}
		<p>nested data loading...</p>
	{:then value}
		<p>nested data: {value}</p>
	{/await}

	<p>
		of course you can also load data strictly on the client like this (and get at least a
		skeleton-app if no JS is available): <a href="/client-loaded">link</a>
	</p>
</div>
