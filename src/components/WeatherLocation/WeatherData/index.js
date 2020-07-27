import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {CLOUD} from '../../../constants/weathers';
import './style.css';


const WeatherData = ({data}) => {
    const {temperature, waetherState, humidity, wind} =data;
    return (
                <div className='weatherDataCont'>
                    <WeatherTemperature temperature={temperature} waetherState={waetherState}/>
                    <WeatherExtraInfo humidity={humidity} wind={wind}/>
                </div>
            )
    }

    WeatherData.prototype = {
        data: PropTypes.shape({
            temperature: PropTypes.number.isRequired,
            waetherState: PropTypes.string.isRequired,
            humidity: PropTypes.number.isRequired,
            wind: PropTypes.string.isRequired,
        })
    }
export default WeatherData;