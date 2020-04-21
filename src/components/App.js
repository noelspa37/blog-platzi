import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './Usuarios';

const Prueba = () => <div>hola Tareas</div>;
const Raiz = () => <div>hola Raiz</div>;

const App = (props) => (
  <BrowserRouter>
    <Menu />
    <div id='margen'>
      <Route exact path='/' component={Raiz} />
      <Route exact path='/tareas' component={Prueba} />
      <Route exact path='/usuarios' component={Usuarios} />
    </div>
  </BrowserRouter>
);

export default App;
