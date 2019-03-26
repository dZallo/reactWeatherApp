import { createStore } from 'redux';
import { city } from './../reducers/city';

//Se le puede pasar un estado inicial
const initialState = {
    city: 'Bilbao,es'
};


// Sirve para que la extension de redux tools detecte el store
export const store = createStore(city, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

