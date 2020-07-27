import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ForecastItem from './Forecastitem';



const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
    <ForecastItem 
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}>
    </ForecastItem>));    
}

const renderProgress = () => {
    return <h3>Cargando pronostico...</h3>;
}

const ForecastExtended = ({ city, forecastData }) => {
        return <div>
            <h2 className='forecast-title' >Pronostico extendido para { city } </h2>
             { forecastData ? renderProgress() :
                renderForecastItemDays(forecastData) 
                }
        </div>    
};

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;