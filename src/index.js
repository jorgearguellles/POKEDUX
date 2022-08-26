import React from 'react';
import ReactDOM from 'react-dom/client';
import { pokemonsReducers } from './reducers/pokemons';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore( pokemonsReducers, composedEnhancers );

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);