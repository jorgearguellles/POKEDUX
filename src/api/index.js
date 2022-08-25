import axios from "axios"

const get150Pokemons = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
        .then( (res)=> res.data.results )
        .catch( (error)=> console.log(error))
};

const getPokemonDetail = (pokemon) =>{
    return axios.get(pokemon.url)
        .then(res => res.data)
        .catch( (error)=> console.log(error))
};

export {get150Pokemons, getPokemonDetail};
