<script lang="ts">
	import Logo from '$lib/assets/logo.svelte';
	import SignInWithGoogle from '$lib/components/SignInWithGoogle.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { supabase } = data;

	function handleSignInWithGoogle() {
		supabase.auth.signInWithOAuth({
			provider: 'google'
		});
	}
</script>

<main class="w-full h-full flex flex-col items-center justify-between p-3">
	<header class="flex items-center justify-center p-5 bg-primary-500 rounded-lg text-white">
		<Logo style="dark" />
	</header>

	<SignInWithGoogle on:click={handleSignInWithGoogle} />
	<div></div>
</main>
