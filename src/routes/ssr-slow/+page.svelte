<script>
	export let data;
</script>

<div class="prose">
	<h1>SSR with very slow data</h1>
	<p>
		You had to wait for the data to be loaded, before navigation to this page was possible (the data
		load was deliberately slow):
	</p>
	<br />
	<p>
		{JSON.stringify(data)}
	</p>
</div>
