import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Searcher } from './components/Searcher.jsx';
import { PokemonList } from './components/PokemonList.jsx';
import { get150Pokemons } from './api/index.js';
import { getPokemonsWithDetails, setLoading } from './actions/index.js';
import logo from './statics/logo.svg';
import { Col, Spin } from 'antd';
import './App.css';

function App() {

  // Get Pokemon from State:
  const pokemons = useSelector(state => state.getIn(['data', 'pokemons'], shallowEqual).toJS());
  // Get loading value from State:
  const loading = useSelector(state => state.get(['ui', 'loading']));
  // Dispatcher reference:
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async ()=> {
      dispatch(setLoading(true));
      const pokemonRes = await get150Pokemons();
      dispatch(setLoading(false));
      dispatch(getPokemonsWithDetails(pokemonRes));
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
      {
        loading 
          ? <Spin spinning size='large' className='spin'/>
          : <PokemonList pokemons={pokemons}/> 
      }
    </div>
  );
};

export default App;
