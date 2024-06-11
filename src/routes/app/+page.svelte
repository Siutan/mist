<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	import type { PageData } from './$types';
	import Logo from '$lib/assets/logo.svelte';

	export let data: PageData;
	$: ({ bookmarks, supabase, user } = data);

	let handleSubmit: EventHandler<SubmitEvent, HTMLFormElement>;
	$: handleSubmit = async (evt) => {
		evt.preventDefault();
		if (!evt.target) return;
	};
</script>

<ul>
	{#if bookmarks.length > 0}
		{#each bookmarks as bookmark}
			<li>{bookmark.title}</li>
		{/each}
	{:else}
		<li>No bookmarks yet</li>
	{/if}
</ul>
