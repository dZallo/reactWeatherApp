import { SET_CITY } from './../actions';
//state estado de la app
export const city = (state, action) => {
    switch (action.type) {
        case SET_CITY:
            return { ...state, city: action.value }

        default:
            break;
    }

    return state;
}