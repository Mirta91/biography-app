<script lang="ts">
  import { onMount } from 'svelte';
  //import skills from "$lib/data/skills.json";
	import css3 from '$lib/images/skills/css3.svg';
	import sass from '$lib/images/skills/sass.svg';
	import html5 from '$lib/images/skills/html5.svg';
	import javascript from '$lib/images/skills/js.svg';
	import typescript from '$lib/images/skills/ts.svg';
	import AppImage from '$lib/components/AppImage.svelte';

	import svelte from '$lib/images/svelte-logo.svg';
	//import sveltekit from '$lib/images/skills/sveltekit.svg';
	import vuejs from '$lib/images/skills/vuejs.svg';
	import tailwind from '$lib/images/skills/tailwind.svg';
	import nodejs from '$lib/images/skills/nodejs.svg';
	import mongodb from '$lib/images/skills/mongodb.svg';

	import vscode from '$lib/images/skills/vscode.svg';
	import npm from '$lib/images/skills/npm.svg';
	import azure from '$lib/images/skills/azure.svg';

	import figma from '$lib/images/skills/figma.svg';
	import postman from '$lib/images/skills/postman.svg';
	import ai from '$lib/images/skills/ai.svg';

  export let skills;

  let searchQuery = '';
  let sortColumn = '';
  let sortDirection = 'asc';
  let rows = skills;

  let filteredRows = [...rows];

  function filterTable() {
    filteredRows = rows.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    sortTable();
  }

  function sortTable() {
    filteredRows = [...filteredRows]; // Ensure we are working with a fresh copy
    if (sortColumn) {
      filteredRows.sort((a, b) => {
        if (sortColumn === 'level') {
          return sortDirection === 'asc' ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn];
        } else {
          const valueA = a[sortColumn].toString().toLowerCase();
          const valueB = b[sortColumn].toString().toLowerCase();
          if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
          if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
          return 0;
        }
      });
    }
  }

  function setSortColumn(column) {
    if (sortColumn === column) {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn = column;
      sortDirection = 'asc';
    }
    sortTable();
  }
</script>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    @apply overflow-scroll max-h-[600px];
  }
  .grid-item {
    @apply bg-white border border-[#edf2f7] p-3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>

<div class="container max-w-screen-md mt-24">

  <div class="pb-6">
    <h3 class="text-xl font-bold pb-4"> 🛠️ Technologies & Skills </h3>
    <p>
      I possess a diverse skill set encompassing both development and design disciplines. My expertise ranges from modern frontend frameworks and tools to UI/UX design, ensuring comprehensive and effective web solutions.
    </p>
    <span class="block pt-6 pb-3">Languages</span>
    <div class="flex gap-4">
      <AppImage src="{html5}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <AppImage src="{css3}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <AppImage src="{sass}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <AppImage src="{javascript}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <AppImage src="{typescript}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
    </div>

    <span class="block pt-6 pb-3">Frameworks / Libraries</span>
    <div class="flex gap-4">
      <AppImage src="{svelte}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <!-- <AppImage src="{sveltekit}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" /> -->
      <AppImage src="{vuejs}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <AppImage src="{tailwind}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <AppImage src="{nodejs}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <AppImage src="{mongodb}" class="w-16 h-12" />
    </div>

    <span class="block pt-6 pb-3">Tools / Platforms</span>
    <div class="flex gap-4">
      <AppImage src="{azure}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <!-- <AppImage src="{sveltekit}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" /> -->
      <AppImage src="{vscode}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <AppImage src="{npm}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <AppImage src="{figma}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <AppImage src="{postman}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
      <AppImage src="{ai}" class="w-10 h-10 md:w-12 md:h-12" alt="skill" />
    </div>
  </div>

  <span class="block pt-6 pb-3">Search and filter all my skills / technologies / tools </span>
  <input
    type="text"
    placeholder="Do you know ..."
    bind:value={searchQuery}
    on:input={filterTable}
    class="mb-4 p-2 border border-svOrange w-full md:min-w-[380px] focus:outline-svOrange"/>
  <div class="grid-container custom-scrollbar">
    <button
      class="bg-svOrange text-white uppercase text-sm font-bold py-3 px-6 cursor-pointer"
      on:click={() => setSortColumn('name')}
    >
      Skill / Technology
    </button>
    <button
      class="bg-svOrange text-white uppercase text-sm font-bold py-3 px-6 cursor-pointer"
      on:click={() => setSortColumn('type')}
    >
      Type
    </button>
    <button
      class="bg-svOrange text-white uppercase text-sm font-bold py-3 px-6 cursor-pointer"
      on:click={() => setSortColumn('level')}
    >
      Level (1-5)
    </button>

    {#each filteredRows as row (row.name)}
      <div class="grid-item">{row.name}</div>
      <div class="grid-item">{row.type}</div>
      <div class="grid-item">
        <div class="flex flex-row gap-1">
          {#each Array.from({ length: row.level }) as _, index}
            <div class="bg-svOrange w-3 h-3 rounded-full" key={index}></div>
          {/each}
        </div>
      </div>
    {/each}
    {#if filteredRows.length === 0}
      <div class="grid-item col-span-3 text-center py-4 text-gray-600">
        Nope 🤕
      </div>
    {/if}
  </div>
</div>
