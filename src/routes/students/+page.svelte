<script>
	let students = ['Mauri', 'Basti', 'Maco'];
</script>

<h1>These are our students:</h1>
<ul>
	{#each students as student}
		<li>
			<a href="/students/{student.toLowerCase()}">{student}</a>
		</li>
	{/each}
</ul>
