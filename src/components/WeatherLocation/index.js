import React, { Component } from 'react';
import convert from 'convert-units';
import './estilos.css';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weathers';

const location = "Bilbao,ES";
const api_key = "77e35e00e8e2c24e7f11c96663bd7e1a";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather})q=${location}&appid=${api_key}`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}
// esto es lo que se va a renderizar
class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Bilbao',
            data: data,
        };
    }

    //Metodo que hace la conversion de grados k a grados c
    getTemp = kelvin =>{
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }
    getWeatherState = weather_data =>{
        return SUN
    }
    getData = weather_data => {
        const{ humidity, temp } = weather_data.main;
        const {speed} =weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);
        const data ={
            humidity,
            temperature:temp,
            weatherState,
            wind : `${speed} m/s`
        }
        return data;
    }
    hadleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data:newWeather
            });

        });
    }

    //Metodo que printa el contenido del componente,printa lo que hay dentro del render
    render() {
        //Destructuring
        //const {city,data} =this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={this.state.city}></Location>
                <WeatherData data={this.state.data}></WeatherData>
                <button onClick={this.hadleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}
// Esto hace que se pueda acceder al componente desde cualquier parte de la app pero haciendo el import
// del componente de WeatherLocation
export default WeatherLocation;