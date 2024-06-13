<script lang="ts">
	import LogoutBtn from '$lib/components/LogoutBtn.svelte';
	import ProviderKeyInput from '$lib/components/ProviderKeyInput.svelte';
	import ProviderSelect from '$lib/components/ProviderSelect.svelte';
    
	export let data;
	const { supabase } = data;

	$: logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
	};
</script>

<main class="w-full h-full space-y-5 p-3">
	<ProviderSelect />
	<ProviderKeyInput />
	<LogoutBtn on:click={logout} />
</main>
