import { useEffect, useState } from 'react';
import { Col } from 'antd';
import {Searcher} from './components/Searcher.jsx';
import {PokemonList} from './components/PokemonList.jsx';
import { get150Pokemon } from './api/index.js';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async ()=> {
      const pokemonRes = await get150Pokemon();
      setPokemonList(pokemonRes);
    }

    fetchPokemon();
  }, [])
  
  return (
    <div className="App">
      <Col span={6} offset={10}>
        <img src={logo} alt='Pokedux logo'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemonList={pokemonList}/> 
    </div>
  );
}

export default App;
