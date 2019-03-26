import { SET_CITY } from './../actions';
//state estado de la app
//state ={} hace que por defecto se ponga el estado vacio
export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            /*
                el ...state, hace que si no tiene esa propiedad definina la meta como una nueva.
                En caso de tenerla definida la modificaria
            */
            return { ...state, city: action.payload }

        default:
            return state;
    }
}