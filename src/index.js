import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

//Importando los reducers
import reducers from './reducers';

//Creando el Store
const store = createStore(
  reducers, // Reducers
  {}, // Estado inicial
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//Con <provider=store>  hacemos publico el store para todo app.
