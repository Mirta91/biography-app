<script lang="ts">
	import AppImage from "$lib/components/AppImage.svelte";
    
    export let title;
    export let links;
    export let image;
    export let icon;
    export let description;
    export let tags;

</script>

<div class="relative max-w-[304px]">

        <h2 class="text-svOrange text-center text-xl pb-2">{title}</h2>

        <AppImage src="{image}" alt="alt - {title}" class="h-44 w-full object-cover" />

        {#if icon}
            <AppImage src="{icon}" alt="icon" class="w-10 h-10 absolute top-6 -left-3 z-10 rounded-full drop-shadow-lg" />
        {/if}
        <p class="text-sm py-2">{@html description}</p> 
        
        <div class="flex flex-col gap-y-2">
            {#each links as link}
            
                <a  
                    href="{link.url}"
                    target="_blank"
                    class="w-full inline-block  text-center bg-white text-svOrange transition-all duration-300 ease-in-out font-bold py-2 px-4">
                        {link.name}
                </a>
            {/each}
        </div>


        <div class="tags pt-2 flex flex-wrap gap-1">
            {#each tags as tag}
                {#if tag.name} <span class="text-sm">{tag.name}</span> {/if}
            {/each}
        </div>


</div>

<style lang="scss">
    .tags span{
        @apply bg-svOrange p-[5px] text-white text-xs uppercase rounded-sm;
    }
</style>