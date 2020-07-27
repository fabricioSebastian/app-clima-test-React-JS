import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';


const WeatherLocation = ({onWeatherLocationClick, city, data}) => (

       <div className='weatherLocationCont' onClick={onWeatherLocationClick} >
            <Location city={city}/>
            {data ? <WeatherData data={data}/> : 
            'Cargando...'}
        </div>               
    
);

WeatherLocation.proptype = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        waetherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WeatherLocation;