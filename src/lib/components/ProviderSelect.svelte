<script lang="ts">
	import { getModel, setModel } from '$lib/localStore';
	import { createSelect, melt } from '@melt-ui/svelte';
	import type { ChangeFn } from '@melt-ui/svelte/internal/helpers';
	import { fade } from 'svelte/transition';

	const options = {
		Providers: ['OpenAI', 'Gemini', 'Claude']
	};

	const {
		elements: { trigger, menu, option, group, groupLabel, label },
		states: { selectedLabel, open },
		helpers: { isSelected }
	} = createSelect<string>({
		defaultSelected: { value: getModel() || 'OpenAI', label: getModel() || 'OpenAI' },
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true,
			sameWidth: true
		}
	});

    $: setModel($selectedLabel);
</script>

<div class="flex flex-col gap-1 bg-primary-500 p-3 rounded-xl">
	<!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
	<label class="block text-magnum-900 tracking-[0.3em]" use:melt={$label}>Select Model</label>
	<button
		class="flex h-10 w-full items-center justify-between rounded-lg bg-primary-950 px-3 py-2
    text-text-100 shadow transition-opacity hover:opacity-90 tracking-[0.2em]"
		use:melt={$trigger}
		aria-label="Food"
	>
		{$selectedLabel || 'Select Model'}
	</button>
	{#if $open}
		<div
			class=" z-10 flex max-h-[300px] flex-col
      overflow-y-auto rounded-lg bg-primary-700 p-1
      shadow focus:!ring-0"
			use:melt={$menu}
			transition:fade={{ duration: 150 }}
		>
			{#each Object.entries(options) as [key, arr]}
				<div use:melt={$group(key)}>
					<div
						class="py-1 pl-4 pr-4 font-semibold capitalize text-text-200"
						use:melt={$groupLabel(key)}
					>
						{key}
					</div>
					{#each arr as item}
						<div
							class="relative cursor-pointer rounded-lg py-1 pl-8 pr-4 text-text-100 tracking-[0.1em]
                hover:bg-primary-500 focus:z-10
                focus:text-text-300
                data-[highlighted]:bg-magnum-200 data-[highlighted]:text-magnum-900
                data-[disabled]:opacity-50"
							use:melt={$option({ value: item, label: item })}
						>
							<div class="check {$isSelected(item) ? 'block' : 'hidden'}"></div>

							{item}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>
