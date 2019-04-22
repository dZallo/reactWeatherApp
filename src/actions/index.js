import transformForecast from './../services/transformForecast'
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA ='SET_FORECAST_DATA';

//Se define el actionCreator y luego se puede ejecutar en el dispatcher
//type es el identificador del action 
export const setCity = payload => ({ type: SET_CITY, payload });
export const setForcastData = payload =>({type:SET_FORECAST_DATA,payload})

export const api_key = "77e35e00e8e2c24e7f11c96663bd7e1a";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        // activar en el estado un indicador de busqueda de datps
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                //modificar el estado con el resultado de la promise(fetch)
                dispatch(setForcastData({city: payload, forecastData}))
            }
        );
        
    };
};