import { PokemonCard } from "./PokemonCard";
import './PokemonList.css';

export const PokemonList = (props) => {
    const { pokemons } = props;

    return(
        <div className="pokemonList">
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} key={pokemon.name} url={pokemon.url}/>
            })}
        </div>
    )
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(' '), // ['','','','','','','','','']
}