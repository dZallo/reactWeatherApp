import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './../components/WeatherLocation';

const LocationList = ({cities}) =>{
    console.log(cities);

    return(
    <div>
        <WeatherLocation city="Bilbao, Es"></WeatherLocation>
        <WeatherLocation city="Malaga, Es"></WeatherLocation>
        <WeatherLocation city="London, Uk"></WeatherLocation>
    </div>
    )
}

LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
}
export default LocationList;