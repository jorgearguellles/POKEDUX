import React from 'react';
import ReactDOM from 'react-dom/client';
import { pokemonsReducers } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger, featuring } from './middlewares';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring),
);

const store = createStore(
  pokemonsReducers,
  composedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);