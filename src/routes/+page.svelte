<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	let countdown = 60;
	let cd = {
		seconds: 8,
		minutes: 10,
		hours: 3,
		days: 0
	};

	function count() {
		if (cd.seconds > 0) {
			cd.seconds--;
		} else {
			cd.seconds = 59;
			if (cd.minutes > 0) {
				cd.minutes--;
			} else {
				cd.minutes = 59;
				if (cd.hours > 0) {
					cd.hours--;
				} else {
					cd.hours = 23;
					if (cd.days > 0) {
						cd.days--;
					} else {
						cd.days = 0;
					}
				}
			}
		}
	}
	onMount(() => {
		setInterval(() => (countdown = countdown - 1), 1000);
		setInterval(() => (stock = stock - 1), Math.random() * 10000 + 5000);
		setInterval(count, 1000);
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

<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
	<div class="flex flex-col">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{cd.days};" />
		</span>
		days
	</div>
	<div class="flex flex-col">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{cd.hours};" />
		</span>
		hours
	</div>
	<div class="flex flex-col">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{cd.minutes};" />
		</span>
		min
	</div>
	<div class="flex flex-col">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{cd.seconds};" />
		</span>
		sec
	</div>
</div>
