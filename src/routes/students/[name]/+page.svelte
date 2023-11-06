<script>
	import { page } from '$app/stores';
	export let data;
</script>

<h1>{$page.params.name[0].toUpperCase() + $page.params.name.slice(1)}s Homepage</h1>

<p>$page.url: {JSON.stringify($page.url)}</p>
<p>$page.route: {JSON.stringify($page.route)}</p>
<p>$page.params: {JSON.stringify($page.params)}</p>

<hr class="my-4" />

<p>quick top level data: {data.quick}</p>

{#await data.streamed.message}
	<p>nested data loading...</p>
{:then value}
	<p>nested data: {value}</p>
{/await}
