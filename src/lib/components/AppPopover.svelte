<script>
	import { createEventDispatcher } from "svelte";
    import { fade } from 'svelte/transition'

	//export let text = "";

	let cssClass;
    export { cssClass as class };

    let open = false;

    function onMouseleave() {
		open = false;
	}
    function onMouseOver() {
		open = true;
	}	
</script>

<span class="relative text-svOrange cursor-default"
    aria-roledescription="popover"
    role="alertdialog" 
    on:focus={() => console.log("focus")}
    on:mouseover={onMouseOver}
    on:mouseleave={onMouseleave}>
    &#9432;
    {#if open}
        <div
            transition:fade={{ delay: 0, duration: 150 }} 
            class="app-popover {cssClass}">
            <slot />
        </div>
    {/if}
</span>
<style lang="scss">
    .app-popover {
        @apply whitespace-normal absolute z-10 rounded-lg bg-white px-4 pb-4 pt-3 text-left w-max max-w-[580px];
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    }
    .pos-left{
        
    }
</style>