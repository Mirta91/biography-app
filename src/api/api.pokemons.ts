import axios from "axios";

export const getPokemons = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/",{ headers: {}, params: {},});
      return response;
    } catch (error) {
      console.error(error);
    }
};

export const getPokemonByName = async(name: string) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
