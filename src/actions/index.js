// Action creation is a Object that describes what kind of change will be happen...
import { getPokemonDetail } from "../api";
import { SET_POKEMONS,SET_LOADING } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
});

// Actions creator with react thunks structure.
export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    const pokemonDetails = await Promise.all(pokemons.map(pokemon => getPokemonDetail(pokemon)))

    dispatch(setPokemons(pokemonDetails));
};