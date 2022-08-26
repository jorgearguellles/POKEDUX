import { SET_POKEMONS, SET_LOADING, SET_FAVORITE_POKEMON } from "../actions/types";
const initialState = {
    pokemons: [],
    loading: false,
};

export const pokemonsReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return { ...state, pokemons: action.payload }
        case SET_FAVORITE_POKEMON:
            const newPokemonsList = [...state.pokemons];
            const currentPokemonIndex = newPokemonsList.findIndex( (pokemon) => pokemon.id === action.payload.pokemonId );
            if(currentPokemonIndex < 0){ 
                return state;
            };
            newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite;

            return { ...state, pokemons: newPokemonsList }
        case SET_LOADING:
            return { ...state, loading: action.payload }
        default:
            return state;
    }
};