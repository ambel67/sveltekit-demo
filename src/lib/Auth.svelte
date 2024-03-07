<script lang="ts">
	import { supabase } from '$lib/supabase.js';
	import { onMount } from 'svelte';

	let loading = false;
	let email = '';
	let errorMessage = '';

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithOtp({ email });
			if (error) throw error;
			alert('Check your email for login link!');
		} catch (error) {
			if (error instanceof Error) {
				errorMessage = error.message;
			}
		} finally {
			loading = false;
		}
	};
</script>

<div class="bg-gray-100 rounded-lg p-8 max-w-md w-full mx-auto">
	<!-- <h1 class="text-2xl font-semibold mb-4 text-center">Supabase + Svelte</h1> -->
	<p class="text-gray-600 mb-6 text-center">Sign in via magic link with your email below</p>
	<form on:submit|preventDefault={handleLogin}>
		<div class="mb-4">
			<label for="email" class="block text-gray-700">Email</label>
			<input
				id="email"
				class="form-input mt-1 block w-full"
				type="email"
				placeholder="Your email"
				bind:value={email}
			/>
		</div>
		{#if errorMessage}
			<div role="alert" class="alert alert-error">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span>Error! Task failed successfully.</span>

				{errorMessage}
			</div>
		{/if}
		<button
			class="bg-gray-700 text-white font-semibold py-2 px-4 w-full rounded"
			style="margin-top: 15px;"
		>
			<span>{loading ? 'Loading' : 'Send magic link'}</span>
		</button>
	</form>
</div>
