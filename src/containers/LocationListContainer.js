import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions  from './../actions';
import { getWeatherCities, getCity} from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    componentDidMount(){      
        const { setWeather, setSelectedCity, cities, city } = this.props; 
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
      }

    render(){
        return (
            <LocationList cities = {this.props.citiesWeather}
            onSelectedLocation={this.handleSelectedLocation} ></LocationList>
        );
    }
}

LocationListContainer.proptype = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators( actions, dispatch );
/** lo de arriba es lo mismo que lo comentado abajo, lo dejo a modod de ejemplo */
/*const mapDispatchToProps = dispatch => ({ 
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
  });*/


const mapStateToProps = state => ({ 
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
});

/** coneccion de redux abarcando a toda la aplicacion */
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);