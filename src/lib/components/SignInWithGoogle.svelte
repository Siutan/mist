<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<button
	class="flex w-fit items-center gap-3 self-center justify-self-center rounded-xl bg-primary-100 p-4 duration-100 hover:bg-primary-200 active:scale-95"
	on:click={handleClick}
>
	<p class="text-base font-semibold uppercase tracking-[0.3em] text-text-900">Continue with Google</p>
	<div class="rounded-lg bg-background-900 p-3">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9 18L15 12L9 6"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>
</button>
