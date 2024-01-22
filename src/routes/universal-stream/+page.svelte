<script>
	export let data;
</script>

<div class="prose">
	<p>We can prevent waiting by streaming data:</p>

	<h2>Here's some quick data:</h2>
	<div>{JSON.stringify(data.user)}</div>
	<h2>Here's the streamed data <br />(depends on CSR Javascript):</h2>
	{#await data.streamed.message}
		<p>Waiting for data...</p>
	{:then streamedData}
		<div>
			{JSON.stringify(streamedData)}
		</div>
	{/await}
</div>
