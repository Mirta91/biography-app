<script lang="ts">
	import AppImage from "$lib/components/AppImage.svelte";

	import stack from '$lib/images/stack.png';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';

</script>

<footer class="flex row gap-10 justify-center items-center">
	<a href="https://stackoverflow.com/users/4038579/mirta">
		<AppImage src={stack} class="w-12 h-12 p-1" alt="stack overflow" />
	</a>

	<a href="https://github.com/Mirta91">
		<AppImage src={github} class="w-12 h-12" alt="github" />
	</a>

	<a href="https://www.linkedin.com/in/mirtastefanac/">
		<AppImage src={linkedin} class="w-12 h-12 p-1" alt="linkedin" />
	</a>
</footer>