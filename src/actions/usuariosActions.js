import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes';
import axios from 'axios';

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const respuesta = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Ups, algo salió mal, intento de nuevo luego',
    });
    console.log('Error', error.message);
  }
};
