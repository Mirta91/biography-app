<script lang="ts">

	import AboutHeader from "$lib/modules/AboutHeader.svelte";
	import AboutIntro from "$lib/modules/AboutIntro.svelte";
	import AboutSkills from "$lib/modules/AboutSkills.svelte";
	//import type { PageData } from "./types";

	export let data; //: PageData;
	console.log({data})

</script>
<svelte:head>
	<title>Skills</title>
	<meta name="description" content="Mirta's skills, technologies and tools" />
</svelte:head>



<AboutSkills skills="{data?.skills}" />