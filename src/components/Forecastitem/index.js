import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';



const ForecastItem =  ({ weekDay, hour, data }) => (
    <div>
        <h2>{ weekDay } - {hour}</h2>
        <WeatherData data={data}></WeatherData>
    </div>
);

ForecastItem.protoType = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        waetherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastItem;