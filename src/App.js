import { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { Col } from 'antd';
import {Searcher} from './components/Searcher.jsx';
import {PokemonList} from './components/PokemonList.jsx';
import { get150Pokemon } from './api/index.js';
import { setPokemons as setPokemonsActions } from './actions/index.js';
import logo from './statics/logo.svg';
import './App.css';

function App(props) {
  const {pokemons, setPokemons} = props;

  useEffect(() => {
    const fetchPokemon = async ()=> {
      const pokemonRes = await get150Pokemon();
      setPokemons(pokemonRes);
    };

    fetchPokemon();
  }, []);
  
  return (
    <div className="App">
      <Col span={6} offset={10}>
        <img src={logo} alt='Pokedux logo'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/> 
    </div>
  );
};

const mapStateToProps = ( state ) => ({
  pokemons: state.pokemons,
}); // Is a function that receiver our State and return an Object with props, ht will be send to che component.

const mapDispatchToProps = ( dispatch )=>({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
