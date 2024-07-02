<script>

import Projects from "./Projects.svelte";
export let data; //: PageData;
console.log({data})
$: ({projects} = data)
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Mirta's projects" />
</svelte:head>

<div class="app-projects mt-24">
    <Projects projects={projects}/>
</div>