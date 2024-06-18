<script lang="ts">
	import Project from "./Project.svelte";
    import projects from "./projects.json";

</script>

<div class="container max-w-screen-md">
    <h3 class="text-left pb-5">Projects</h3>
    <div class="flex flex-col items-center sm:items-start sm:grid sm:grid-cols-2 gap-8">
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

<style>
   
</style>