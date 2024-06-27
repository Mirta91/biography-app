import { c as create_ssr_component, i as is_promise, n as noop, f as each, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import axios from "axios";
const getPokemons = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/", { headers: {}, params: {} });
    return response;
  } catch (error) {
    console.error(error);
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pokemonList = getPokemons();
  return `<div class="container">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `  <p data-svelte-h="svelte-11mt6g0">Loading pokemons...</p> `;
    }
    return function(pokemons) {
      return ` <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-16 gap-y-4">${each(pokemons?.data?.results, (pokemon) => {
        return `<div class="flex justify-between items-center"><span class="capitalize">${escape(pokemon.name)}</span> <button type="button"${add_attribute("name", pokemon.name, 0)} class="bg-svOrange text-white hover:brightness-75 font-bold py-2 px-2 rounded">See Pokemon</button> </div>`;
      })}</div> `;
    }(__value);
  }(pokemonList)} ${``}</div>`;
});
export {
  Page as default
};
