<script lang="ts">
	import { onDestroy } from 'svelte'
	import { tweened } from 'svelte/motion'
	import * as easingFns from 'svelte/easing';
    
    const names = Object.keys(easingFns).filter(
        n => !['default', '__moduleExports'].includes(n),
    )

	let positionStore
	let position = 0
	let cleanup = null
	
	export let text ="";
	export let duration = 3000;
	let cssClass;
    export { cssClass as class };

    onDestroy(() => {
		if (cleanup) cleanup()
	})
	
	$: easing = easingFns["circInOut"]
	$: {
		if (cleanup) cleanup()
		
		positionStore = tweened(0, {easing, duration: duration})
		cleanup = positionStore.subscribe(val => position = val)
		
		positionStore.set(text.length)
	}
</script> 

 <span class="{cssClass}">
    {@html text.substr(0, position)}<span class="cursor"></span>
</span>



<style>
    .cursor {
		display: inline-block;
		width: 6px;
		height: 1.8rem;
		background: red;
		animation: blink 0.8s infinite;
	}

    @keyframes blink {
		0% {
			background: transparent;
		}
		40% {
			background: #ff3e00;
		}
		to {
			background: #ff3e00;
		}
	}
</style>