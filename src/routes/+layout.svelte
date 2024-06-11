<script>
	import "../app.css"
	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
            console.log('new session', _, newSession);
			if (!newSession) {
				/**
				 * Queue this as a task so the navigation won't prevent the
				 * triggering function from completing
				 */
				 setTimeout(() => {
					goto('/auth', { invalidateAll: true });
				});
			}	
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
			goto('/app');
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<main class="w-screen h-screen bg-background-900 text-text-100">
	<slot />
</main>