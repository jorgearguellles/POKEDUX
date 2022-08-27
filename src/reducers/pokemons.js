import { fromJS } from "immutable";
import { SET_POKEMONS, SET_FAVORITE_POKEMON } from "../actions/types";

const initialState = fromJS({
    pokemons: [],
});

export const pokemonsReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return state.setIn(['pokemons'], fromJS(action.payload))
        case SET_FAVORITE_POKEMON:
            const currentPokemonIndex = state.get('pokemons').findIndex( (pokemon) => pokemon.get('id') === action.payload.pokemonId );
            if(currentPokemonIndex < 0) return state;
            const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite')
            // const isFavorite = state.get(['pokemons','currentPokemonIndex', 'favorite']); // Other new way
            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
        default:
            return state;
    }
};