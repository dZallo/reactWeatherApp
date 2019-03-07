import React from 'react';
import './estilos.css';
import {PropTypes} from 'prop-types';

const Location = (props)=>{
    console.log(props);
    //Debugger para el codigo donde se ha puesto dicha etiqueta, 
    //en produccion tendremos que quitar todas estas etiquetas
    //debugger;


    //destructuring
    //const {city} = props; --> es lo mismo que la siguiente linea
    const city = props.city;
    return(
    <div className="locationCont">
        <h2>{city}</h2>
    </div>
    );
};
//Validaciones
Location.propTypes={
    city:PropTypes.string.isRequired,
};
export default Location;