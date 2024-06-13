<script lang="ts">
	import ExternalLink from '$lib/assets/externalLink.svelte';
	import type { Point } from '$lib/types/point';

	import { createAccordion, melt } from '@melt-ui/svelte';
	import { flip } from 'svelte/animate';
	import { fly, slide } from 'svelte/transition';
	export let id: string;
	export let title: string;
	export let url: string;
	export let imageUrl: string = '';
	export let desc: string;
	export let points: Point[] = [];

	// melt ui only accepts strings as ids
	if (id) {
		id = id.toString();
	}

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion();
</script>

<div class="mx-auto max-w-full rounded-xl bg-primary-500 shadow-lg sm:w-[25rem]" {...$root}>
	<div
		use:melt={$item(id)}
		class="overflow-hidden transition-colors first:rounded-t-xl
            last:rounded-b-xl"
	>
		<h2 class="flex">
			<button
				use:melt={$trigger(id)}
				class="flex flex-1 cursor-pointer items-center justify-between bg-primary-500 px-5 py-5 text-base font-medium leading-none text-black transition-colors hover:bg-priamry-600 focus:!ring-0 focus-visible:text-magnum-800"
			>
				{title}
			</button>
		</h2>
		{#if $isSelected(id)}
			<div
				class="content overflow-hidden bg-primary-400 text-sm text-text-100"
				use:melt={$content(id)}
				transition:slide
			>
				<div class="flex flex-col w-full p-3 gap-3">
					<p class=" text-base text-text-900">{desc}</p>
					<div class="flex flex-col w-full gap-2">
						{#each points as point}
							<div class="flex flex-col gap-2">
								<div class="rounded-full p-2">
									<p class="text-base font-semibold text-text-900">{point.title}</p>
								</div>
								<div class="pl-10">
									<p class="text-base text-text-900">{point.point}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="p-2">
					<a href={url} target="_blank" class="btn btn-primary">
						<p>Read the full article</p>
						<ExternalLink />
					</a>
				</div>
			</div>
		{/if}
	</div>
</div>
