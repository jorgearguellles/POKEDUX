import axios from "axios"

const get150Pokemon = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
        .then( (res)=> res.data.results )
        .catch( (error)=> console.log(error))
};

export {get150Pokemon};