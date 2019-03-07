import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './estilos.css';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import { api_weather } from './../../constants/api_url';

// esto es lo que se va a renderizar
class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Bilbao',
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.hadleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    /*Se eliminaran en la version 17
    componentWillMount() {
        console.log("UNSAFE componentWillMount");
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
    */
    


    hadleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log("Resultado del hadleUpdateClick ")
            const newWeather = transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            });

        }).catch(error=>{
            console.log("esto ha cascado");
        });
    }

    //Metodo que printa el contenido del componente,printa lo que hay dentro del render
    render() {
        console.log(" render");
        //Destructuring
        const {city,data} =this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ?<WeatherData data={data}></WeatherData> :<CircularProgress></CircularProgress>}
            </div>
        );
    }
}
// Esto hace que se pueda acceder al componente desde cualquier parte de la app pero haciendo el import
// del componente de WeatherLocation
export default WeatherLocation;