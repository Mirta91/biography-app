<script lang="ts">

	import AboutSkills from "$lib/modules/AboutSkills.svelte";
	//import type { PageData } from "./types";

	export let data; //: PageData;

	$: ({skills} = data)  //const { skills } = data
</script>
<svelte:head>
	<title>Skills</title>
	<meta name="description" content="Mirta's skills, technologies and tools" />
</svelte:head>



<AboutSkills skills="{skills}" />