<script lang="ts">
    import { onMount } from "svelte";
    import { getPokemons, getPokemonByName } from "../../../api/api.pokemons";
    const endpoint = "https://pokeapi.co/api/v2/pokemon/";

    let data;
    let pokemonDetail = {};
    let clicked = false;

    onMount(async () => {
        data = await getPokemons();
        console.log(data);
    });

    let pokemonList = getPokemons();

    const getDetails = (name: string) =>{
    clicked = true;

    getPokemonByName(name).then(res => {
        console.log(res)
        pokemonDetail = {
            name: res?.data?.name,
            image: res?.data?.sprites?.front_default,
        };
    });
  };


</script>
<div class="container">
{#await pokemonList}
        <!-- TODO loader -->
        <p>Loading pokemons...</p>
    {:then pokemons}
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-16 gap-y-4">
            {#each pokemons?.data?.results as pokemon}
                <div class="flex justify-between items-center">
                    <span class="capitalize"> {pokemon.name} </span>
                    <button 
                        type="button" 
                        name={pokemon.name}
                        class="bg-svOrange text-white hover:brightness-75 font-bold py-2 px-2 rounded"
                        on:click={() => getDetails(pokemon.name)}>See Pokemon</button>
                </div>
            {/each}
        </div>

    {:catch error}
        <p class="text-red-600">{error}</p>
{/await}

{#if clicked && pokemonDetail}
<div class="w-64 h-40 border-4 border-pokeYellow rounded-md">
    <img src="{pokemonDetail.image}" alt="{pokemonDetail.name}">
</div>
{/if}

</div>

