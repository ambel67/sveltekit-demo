<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	let countdown = 60;
	onMount(() => {
		setInterval(() => (countdown = countdown - 1), 1000);
		setInterval(() => (stock = stock - 1), Math.random() * 10000 + 5000);
	});
	let stock = 10;
</script>

<h1>home</h1>
<p>this is the home page.</p>
<button class="btn btn-primary">hallo</button>
<Icon icon="game-icons:bloody-sword" class="text-red-700 text-7xl" />
<span class="countdown font-mono text-6xl">
	<span style="--value:{countdown};" />
</span>
<div class="radial-progress text-primary" style="--value:{stock};">{stock}</div>
