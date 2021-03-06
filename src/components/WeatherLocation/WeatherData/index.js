import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import { CLOUD } from './../../../constants/weathers';
import './styles.css';
//Destructuring con objetos complejos
const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => {
    return (<div className="weatherDataCont">
        <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>);
};
WeatherData.protoType = {
    data: PropTypes.shape(
        {
            temperature: PropTypes.number.isRequired,
            weatherState: PropTypes.string.isRequired,
            humidity: PropTypes.number.isRequired,
            wind: PropTypes.string.isRequired,
        }
    )
}
export default WeatherData;