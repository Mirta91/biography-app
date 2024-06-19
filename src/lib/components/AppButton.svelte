<script>
	import { createEventDispatcher } from "svelte";

	export let text = "";
	export let hasSlotAfterText = false;
	export let disabled = false;
	export let element = null;
	export let id='';

	let cssClass;
    export { cssClass as class };

	const dispatch = createEventDispatcher();
	function onClick() { dispatch("click"); }
	function onMouseleave() { dispatch("mouseleave");}
</script>

<button
    class="app-button {cssClass}"
    type="button"
    on:click={onClick}
    on:mouseleave={onMouseleave}
    bind:this={element}
    {disabled}
    {id}>
        {@html text}
        <slot />
    {#if hasSlotAfterText}
        <slot name="after-text" />
    {/if}
</button>