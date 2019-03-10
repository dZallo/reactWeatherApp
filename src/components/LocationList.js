import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './../components/WeatherLocation';
import './styles.css'

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }
    //console.log(cities);
    const strToComponents = (cities) => (
        cities.map((city, index) =>
            <WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city)}
            />)
    )
    return (
        <div className="locationList">
            {strToComponents(cities)}
        </div>
    );
};

LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;