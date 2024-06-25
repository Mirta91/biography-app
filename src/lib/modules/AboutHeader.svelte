<script lang="ts">
	import AppImage from '$lib/components/AppImage.svelte';
	import AppTypewriter from '$lib/components/AppTypewriter.svelte';

	import background from '$lib/images/bckg-code-1.jpg';
	import mirta from '$lib/images/mirta.jpeg';
	import stack from '$lib/images/stack.png';
	import github from '$lib/images/github-circle.svg';
	import linkedin from '$lib/images/linkedin.svg';

	import { onMount } from 'svelte';
    import { fade } from 'svelte/transition'

    let visible = false;

    onMount(async () => {
        visible = true;
    });
    

</script>

<div class="w-full h-[60vh] bg-black relative">
    <!-- <div class="bckg-img w-full h-full object-cover"></div> -->
    <AppImage src={background} alt="background" class="w-full h-full object-cover opacity-80 blur-[2px]"/>
    {#if visible}
    <div transition:fade={{ delay: 500, duration: 500 }} class="absolute w-full h-full left-0 top-0 flex  flex-col md:flex-row justify-center items-center gap-7 md:gap-28">
        <AppImage src={mirta} alt="mirta" class="w-32 h-32 md:w-64 md:h-64 rounded-full border-4 border-white"/>
        <div class="text-white md:min-w-[302px]">
            <h1 class="text-center md:text-left">
				<AppTypewriter text="Mirta Štefanac" class=""></AppTypewriter>
			</h1>       
            <h2 transition:fade={{ delay: 2800, duration: 500 }}>
				Web developer
			</h2>
			<div transition:fade={{ delay: 2800, duration: 500 }} class="flex row gap-2 justify-start items-center mt-2">
				<a href="https://stackoverflow.com/users/4038579/mirta" target="_blank">
					<AppImage src={stack} class="w-6 h-6 p-1" alt="stack overflow" />
				</a>
			
				<a href="https://github.com/Mirta91" class="rounded-full" target="_blank">
					<AppImage src={github} class="w-6 h-6  rounded-full" alt="github" />
				</a>
			
				<a href="https://www.linkedin.com/in/mirtastefanac/" target="_blank">
					<AppImage src={linkedin} class="w-6 h-6 p-1 b" alt="linkedin" />
				</a>
			</div>
        </div>
		
    </div>
    {/if}

</div>

<style>
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