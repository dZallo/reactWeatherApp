import { createStore } from 'redux';

 // Sirve para que la extension de redux tools detecte el store
 export const store = createStore(() => { },
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

