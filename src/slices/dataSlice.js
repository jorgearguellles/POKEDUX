import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get150Pokemons, getPokemonDetail } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const pokemonRes = await get150Pokemons();
        const pokemonDetails = await Promise.all(pokemonRes.map(pokemon => getPokemonDetail(pokemon)));
        dispatch(setPokemons(pokemonDetails));
        dispatch(setLoading(false))
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex( (pokemon) => pokemon.id === action.payload.pokemonId );
            if(currentPokemonIndex >= 0){
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            };
        },
    },
});

export const { setFavorite, setPokemons } = dataSlice.actions;
console.log(dataSlice)
export default dataSlice.reducer;