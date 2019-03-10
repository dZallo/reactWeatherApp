import React, { Component } from 'react';
import PropTypes from 'prop-types';
import transformForecast from './../services/transformForecast'
import ForecastItem from './ForecasItem';
import './styles.css'
/*
const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',

]
const data ={
    temperature:10,
    humidity:10,
    weatherSate:'normal',
    wind:'normal'
}
*/

export const api_key = "77e35e00e8e2c24e7f11c96663bd7e1a";
export const url = "http://api.openweathermap.org/data/2.5/forecast";
class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = { forecastData: null };
    }

    componentDidMount() {
        console.log("componentDidMount");
        //fetch or axios
        this.updateCity(this.props.city);
       
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }
    updateCity= city =>{
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                //console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                //console.log(forecastData);
                this.setState({ forecastData: forecastData })
            }
        );
    }
    renderForecastItemDays(forecastData) {

        return forecastData.map(forecast => (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}>
            </ForecastItem>
        ))
    }

    renderProgress() {
        return <h3>Cargando pronóstico extendido...</h3>;
    }
    render() {
        //const city = this.props.city;
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico semanal: {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()}
            </div>)
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;