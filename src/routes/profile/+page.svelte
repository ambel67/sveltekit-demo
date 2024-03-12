<script lang="ts">
	import { onMount } from 'svelte';
	//import {AuthSession} from '@supabase/supabase-js';
	import { supabase } from '$lib/supabase.js';
	import { session } from '$lib/store';
	import Avatar from '$lib/Avatar.svelte';

	let loading = false;
	let username: string | null = null;
	let website: string | null = null;
	let avatarUrl: string | null = null;

	onMount(() => {
		getProfile();
	});

	const getProfile = async () => {
		try {
			loading = true;
			const { user } = $session;

			const { data, error, status } = await supabase
				.from('profiles')
				.select('username, website, avatar_url')
				.eq('id', user.id)
				.single();

			if (error && status !== 406) throw error;

			if (data) {
				username = data.username;
				website = data.website;
				avatarUrl = data.avatar_url;
			}
		} catch (error) {
			console.error(error);
		} finally {
			loading = false;
		}
	};

	const updateProfile = async () => {
		try {
			loading = true;
			const { user } = $session;

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url: avatarUrl,
				updated_at: new Date().toISOString()
			};

			const { error } = await supabase.from('profiles').upsert(updates);

			if (error) {
				throw error;
			}
		} catch (error) {
			console.error(error);
		} finally {
			loading = false;
		}
	};
</script>

<div class="container mx-auto py-12">
	<h1 class="text-center font-bold text-3xl mb-8">Update Your Profile</h1>

	{#if $session}
		<Avatar size={150} bind:url={avatarUrl} />+
		<form on:submit|preventDefault={updateProfile} class="max-w-md mx-auto">
			<div class="mb-6">
				<label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email:</label>
				<input id="email" type="email" class="input-field" value={$session.user.email} disabled />
			</div>
			<div class="mb-6">
				<label for="username" class="block text-sm font-medium text-gray-700 mb-1">Name:</label>
				<input id="username" type="text" class="input-field" bind:value={username} />
			</div>
			<div class="mb-6">
				<label for="website" class="block text-sm font-medium text-gray-700 mb-1">Website:</label>
				<input id="website" type="text" class="input-field" bind:value={website} />
			</div>
			<div class="mb-6">
				<button type="submit" class="button primary w-full" disabled={loading}>
					{loading ? 'Saving ...' : 'Update Profile'}
				</button>
			</div>
			<button type="button" class="button w-full" on:click={() => supabase.auth.signOut()}>
				Sign Out
			</button>
		</form>
	{:else}
		<div class="text-center text-gray-600">Seems like you're not logged in!</div>
	{/if}
</div>
