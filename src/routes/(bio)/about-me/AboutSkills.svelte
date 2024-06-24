<script lang="ts">
  import { onMount } from 'svelte';

  let searchQuery = '';
  let sortColumn = '';
  let sortDirection = 'asc';
  let rows = [
    { name: 'Svelte', type: "Tech", level: 4 },
    { name: 'SvelteKit', type: "Tech", level: 3 },
    { name: 'Tailwind', type: "Tech", level: 5 },
    { name: 'Vue.js', type: "Tech", level: 4 },
    { name: 'Next.js', type: "Tech", level: 1 },
    { name: 'Cypress', type: "Tech", level: 3 },
    { name: 'Playright', type: "Tech", level: 2 },
    { name: 'Bootstrap', type: "Tech", level: 5},
    { name: 'Javascript', type: "Tech", level: 4 },
    { name: 'Typescript', type: "Tech", level: 3 },
    { name: 'Vite', type: "Tech", level: 3 },
    { name: 'JSON', type: "Tech", level: 5 },
    { name: 'SQL', type: "Tech", level: 2 },
    { name: 'MongoDB', type: "Tech", level: 2 },
    { name: 'PHP', type: "Tech", level: 2 },
    { name: 'Node.js', type: "Tech", level: 2 },
    { name: 'Express.js', type: "Tech", level: 2 },
    { name: 'SCSS / LESS', type: "Tech", level: 5 },
    { name: 'HTML', type: "Tech", level: 5 },
    { name: 'Webpack', type: "Tech", level: 5 },
    { name: 'DevOps', type: "Tech", level: 2 },
    { name: 'Prolog', type: "Tech", level: 2 },
    { name: 'UX design', type: "Design", level: 3 },
    { name: 'UI design', type: "Design", level: 3 },
    { name: 'Adobe Photoshop', type: "Design", level: 3 },
    { name: 'Adobe Illustrator', type: "Design", level: 3 },
    { name: 'Figma', type: "Design", level: 3 },
  ];
  let filteredRows = [...rows];

/*   onMount(() => {
    filterTable();
  }); */

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
    @apply overflow-scroll h-[600px];
  }
  .grid-item {
    @apply bg-white border border-[#edf2f7] p-3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>

<div class="container max-w-screen-md">
  <input
    type="text"
    placeholder="Search a skill"
    bind:value={searchQuery}
    on:input={filterTable}
    class="mb-4 p-2 border border-svOrange"
  />
  <div class="grid-container custom-scrollbar">
    <button
      class="bg-svOrange text-white uppercase text-sm font-bold py-3 px-6 cursor-pointer"
      on:click={() => setSortColumn('name')}
    >
      Skill
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
      <div class="grid-item col-span-3 text-center py-4 text-gray-600">No matching records found</div>
    {/if}
  </div>
</div>
