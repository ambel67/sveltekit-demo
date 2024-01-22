<script>
	import { page } from '$app/stores';
</script>

<div>
	<h1>{$page.params.name[0].toUpperCase() + $page.params.name.slice(1)}s Homepage</h1>

	<p>$page.url: {JSON.stringify($page.url)}</p>
	<p>$page.route: {JSON.stringify($page.route)}</p>
	<p>$page.params: {JSON.stringify($page.params)}</p>
</div>
