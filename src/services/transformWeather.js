import convert from 'convert-units';

import { CLOUDY, SUN, RAIN, SNOW,THUNDER,DRIZZLE} from '../constants/weathers';


const getTemp = kenvin => {
    return Number(convert(kenvin).from('K').to('C').toFixed(2));
}

const getWeatherState = weather => {
    const { id } = weather[0];
    if( id < 300){
        return THUNDER;
    }else if(id < 400){
        return DRIZZLE;
    } else if(id < 600){
        return RAIN;
    } else if(id < 700){
        return SNOW;
    } else if(id === 800){
        return SUN;
    } else {
        return CLOUDY;
    }
}

const transformWeather = (weather_data) => {

    const {humidity } = 10;
    const { speed } = 20;
    const waetherState = 10; 
    const temperature = 25;
    const data = {
        humidity,
        temperature,
        waetherState,
        wind: `${speed} m/s`
    }
    return data;
}

export default transformWeather;