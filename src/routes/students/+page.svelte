<script>
	let students = ['Maurice', 'Jeroen', 'Maryam'];
</script>

<h1>These are our students:</h1>
{#each students as student}
	<a href="/students/{student.toLowerCase()}">{student}</a>
{/each}
