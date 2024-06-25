<script lang="ts">

	import AboutHeader from "$lib/modules/AboutHeader.svelte";
	import AboutIntro from "$lib/modules/AboutIntro.svelte";
	import AboutSkills from "$lib/modules/AboutSkills.svelte";
	import type { PageData } from "./types";

	export let data: PageData;
	let skills = data.data;
</script>
<svelte:head>
	<title>Welcome</title>
	<meta name="description" content="Mirta's bio web app" />
</svelte:head>


<AboutHeader />
<AboutIntro />
<AboutSkills {skills}/>