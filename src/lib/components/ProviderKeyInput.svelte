<script>
	import { getApiKey, setApiKey } from "$lib/localStore";
    import { debounce } from "$lib/utils";
    let key = getApiKey();
    let saving = false;

    const handleKeyDown = () => {
        saving = true;
        handleStoreKey();
    }

    const handleStoreKey = debounce(() => {
            setApiKey(key);
            saving = false;
        }, 1000);
</script>

<div class="flex flex-col gap-1 bg-primary-500 p-3 rounded-xl">
    <div class="flex items-center justify-between">
        <label for="api-key" class="block text-magnum-900 tracking-[0.3em]">API Key</label>
        {#if saving}
            <p class="text-magnum-900 text-sm animate-pulse duration-100">Saving...</p>
        {/if}
    </div>
	<input name="api-key" type="text" class="w-full h-10 rounded-lg bg-primary-950 px-3 py-2 tracking-[0.2em]" bind:value={key} on:keydown={handleKeyDown} autocomplete="off" />
</div>
