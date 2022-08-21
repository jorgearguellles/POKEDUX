import { PokemonCard } from "./PokemonCard";
import './PokemonList.css';

export const PokemonList = ({ pokemons }) => {
    return(
        <div className="pokemonList">
            {pokemons.map((pokemon) => {
                return <PokemonCard />
            })}
        </div>
    )
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(' '), // ['','','','','','','','','']
}