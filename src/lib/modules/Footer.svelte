<script lang="ts">
	import AppImage from "$lib/components/AppImage.svelte";

	import stack from '$lib/images/stack.png';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';

</script>

<footer class="pt-12 pb-12 border-t mt-10 text-center text-xs flex flex-col justify-center items-center">
	<div class="flex row gap-10 justify-center items-center">
		<a href="https://stackoverflow.com/users/4038579/mirta">
			<AppImage src={stack} class="w-8 h-8 p-1" alt="stack overflow" />
		</a>

		<a href="https://github.com/Mirta91">
			<AppImage src={github} class="w-8 h-8" alt="github" />
		</a>

		<a href="https://www.linkedin.com/in/mirtastefanac/">
			<AppImage src={linkedin} class="w-8 h-8 p-1" alt="linkedin" />
		</a>

	</div>
	<p class="max-w-screen-md inline-block mt-6">
		Technologies used to create this website are 
		<a href="https://svelte.dev/">Svelte</a> & <a href="https://kit.svelte.dev/">SvelteKit</a>, <a href="https://sass-lang.com/">Sass</a> & <a href="https://tailwindcss.com/">Tailwind</a>, <a href="https://www.mongodb.com/">MongoDB</a> (Atlas)
	</p>

</footer>