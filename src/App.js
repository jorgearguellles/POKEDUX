import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Searcher } from './components/Searcher.jsx';
import { PokemonList } from './components/PokemonList.jsx';
import logo from './statics/logo.svg';
import { Col, Spin } from 'antd';
import './App.css';
import { fetchPokemonsWithDetails } from './slices/dataSlice.js';

function App() {

  // Get Pokemon from State:
  const pokemons = useSelector(state => state.data.pokemons , shallowEqual);
  // Get loading value from State:
  const loading = useSelector(state => state.ui.loading);
  // Dispatcher reference:
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
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
