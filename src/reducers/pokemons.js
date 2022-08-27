import { fromJS } from "immutable";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE_POKEMON } from "../actions/types";

const initialState = fromJS({
    pokemons: [],
    loading: false,
});

export const pokemonsReducers = (state = initialState, action) => {
    console.log({state})
    switch (action.type) {
        case SET_POKEMONS:
            // return { ...state, pokemons: action.payload }
            return state.setIn(['pokemons'], fromJS(action.payload))
        case SET_FAVORITE_POKEMON:
            const currentPokemonIndex = state.get('pokemons').findIndex( (pokemon) => pokemon.get('id') === action.payload.pokemonId );
            if(currentPokemonIndex < 0) return state;
            const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite')
            // const isFavorite = state.get(['pokemons','currentPokemonIndex', 'favorite']); // Other new way
            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
        case SET_LOADING:
            // return { ...state, loading: action.payload }
            return state.setIn(['loading'], action.payload); 
        default:
            return state;
    }
};