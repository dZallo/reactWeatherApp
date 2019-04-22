import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import  reducers  from './../reducers';

//Se le puede pasar un estado inicial
const initialState = {
    city: 'Bilbao,es'
};

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Sirve para que la extension de redux tools detecte el store
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//composeEnhancers para la extension de redux
//applyMiddleware(thunk) --> para el funcionamiento de la app
export const store = createStore(reducers, initialState,composeEnhancers(applyMiddleware(thunk)));

