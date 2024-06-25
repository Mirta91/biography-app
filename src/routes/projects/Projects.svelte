<script lang="ts">
	import Project from "./ProjectItem.svelte";
    //import projects from "./projects.json";
    import type { ProjectInterface } from "$interfaces/interfaces"; 
    export let projects;

</script>

<div class="container max-w-screen-md">
    <h3 class="text-left font-bold pb-5 text-xl">💼 My projects</h3>
    <p>
        Some of the projects I have worked on, spanning from tourism, digital platforms and sports to manufacturing. Each project reflects a unique blend of innovation and technology, tailored to meet specific industry needs and challenges.
    </p>
    <div class="flex flex-col items-center sm:items-start sm:grid sm:grid-cols-2 gap-8 mt-12">
        {#each projects as project}
            <Project
                image="{project.image}"
                title="{project.name}" 
                links="{project.links}" 
                description="{project.description}"
                icon={project.icon}
                tags={project.tags}
            />
        {/each}
    </div>  
</div>
