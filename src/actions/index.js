import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';
export const SET_CITY = 'SET_CITY';
export const SET_WEATHER = 'SET_WEATHER';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
//const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const setCity = (payload) => ({ type: SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

const api_key = "9ae258daa02b00832e647c788862f80e";
const url = 'http://api.openweathermap.org/data/2.5/forecast';
const url_weather = 'http://api.openweathermap.org/data/2.5/weather';
export const setSelectedCity = payload => {

    return (dispatch, getState) => {
         // fetch or axios
         const url_forecast = ` ${url}?q=${payload}&appid=${api_key} `;
        
         
         // activar en el estado un indicados de busqueda de datos 
         dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();
        if(date && (now - date) < 1 * 60 * 1000){
            return;
        }

         return fetch(url_forecast).then(
             data => (data.json())
         ).then(
             weather_data => {
                 const forecastData = transformForecast(weather_data);
                
                 //modifica el estado con el resultado de la promise(fetch)
                 dispatch(setForecastData({city:payload, forecastData}));
             }
         );
    }
};

export const setWeather = payload => {

    return dispatch => {
        payload.forEach( city => {
           // dispatchEvent(getWeatherCity(city));

            const api_weather = `${url}?q=${city}&APPID=${api_key}`; 
            fetch(api_weather).then(data => {
                return data.json();
            }).then( weather_data => {
                const weather = transformWeather(weather_data); 
                
                dispatch(setWeatherCity({city, weather}));
                
            } );
        });
    }

};