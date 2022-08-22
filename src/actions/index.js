// Action creation is a Object that describes what kind of change will be happen...
import { SET_POKEMONS } from "./types"

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})