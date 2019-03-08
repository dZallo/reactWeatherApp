import React from 'react';
import WeatherLocation from './../components/WeatherLocation';

const LocationList = () =>{
    return(
    <div>
        <WeatherLocation city="Bilbao, Es"></WeatherLocation>
        <WeatherLocation city="Malaga, Es"></WeatherLocation>
        <WeatherLocation city="Barcelona, Es"></WeatherLocation>
    </div>

    )
}
export default LocationList;