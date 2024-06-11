<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { EventHandler } from 'svelte/elements';

	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ bookmarks, supabase, user } = data);

	let handleSubmit: EventHandler<SubmitEvent, HTMLFormElement>;
	$: handleSubmit = async (evt) => {
		evt.preventDefault();
		if (!evt.target) return;
	};
</script>

<h1>Private page for user: {user?.email}</h1>
<h2>Notes</h2>
<ul>
	{#if bookmarks.length > 0}
		{#each bookmarks as bookmark}
			<li>{bookmark.title}</li>
		{/each}
	{:else}
		<li>No notes yet</li>
	{/if}
</ul>
<form on:submit={handleSubmit}>
	<label>
		Add a note
		<input name="note" type="text" />
	</label>
</form>
