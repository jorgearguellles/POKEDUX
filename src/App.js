import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Searcher} from './components/Searcher.jsx';
import {PokemonList} from './components/PokemonList.jsx';
import { get150Pokemons, getPokemonDetail } from './api/index.js';
import { setPokemons } from './actions/index.js';
import logo from './statics/logo.svg';
import { Col } from 'antd';
import './App.css';

function App() {

  // Get Pokemon from State:
  const pokemons = useSelector(state => state.pokemons);
  // Dispatcher reference:
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async ()=> {
      const pokemonRes = await get150Pokemons();
      const pokemonDetails = await Promise.all(pokemonRes.map(pokemon => getPokemonDetail(pokemon)))
      
      dispatch(setPokemons(pokemonDetails));
    };

    fetchPokemon();
  }, []);
  
  return (
    <div className="App">
      <Col span={6} offset={10}>
        <img src={logo} alt='Pokédux logo'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/> 
    </div>
  );
};

export default App;
