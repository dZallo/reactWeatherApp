const location = "Bilbao,ES";
const api_key = "77e35e00e8e2c24e7f11c96663bd7e1a";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;
