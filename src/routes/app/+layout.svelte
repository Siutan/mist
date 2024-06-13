<script>
	import { goto } from '$app/navigation';
	import Logo from '$lib/assets/logo.svelte';
	import Settings from '$lib/assets/settings.svelte';
	import { page } from '$app/stores';
	import Home from '$lib/assets/home.svelte';

	export let data;
	$: ({ supabase } = data);

	$: isHome = $page.url.pathname === '/app';
</script>

<main>
	<header class="w-full h-full flex items-center justify-between p-3">
		<div class="w-full flex items-center justify-start p-5">
			<Logo style="light" />
		</div>
		<div class="p-5">
			{#if isHome}
				<a href="/app/settings">
					<Settings
						size={30}
						styles="text-primary-500 hover:text-primary-600 active:scale-95 hover:rotate-180 duration-200"
					/>
				</a>
			{:else}
			<a href="/app">
				<Home
				size={30}
				styles="text-primary-500 hover:text-primary-600 active:scale-95 hover:animate-pulse duration-200"
				/>
			</a>
			{/if}
		</div>
	</header>

	<slot />
</main>
