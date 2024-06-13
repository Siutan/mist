<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import type { PageData } from './$types';
	import Bookmark from '$lib/components/Bookmark.svelte';

	export let data: PageData;
	$: ({ bookmarks, supabase, user } = data);

	let handleSubmit: EventHandler<SubmitEvent, HTMLFormElement>;
	$: handleSubmit = async (evt) => {
		evt.preventDefault();
		if (!evt.target) return;
	};
</script>

<main class="flex flex-col items-center justify-center p-3">
	<ul>
		{#if bookmarks.length > 0}
			{#each bookmarks as bookmark}
				<Bookmark id={bookmark.id} title={bookmark.title} url={bookmark.url} desc={bookmark.short_desc} points={bookmark.points} />
			{/each}
		{:else}
			<li>No bookmarks yet</li>
		{/if}
	</ul>
</main>
