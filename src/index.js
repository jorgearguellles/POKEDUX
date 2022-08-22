import React from 'react';
import ReactDOM from 'react-dom/client';
import { pokemonsReducers } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(pokemonsReducers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);