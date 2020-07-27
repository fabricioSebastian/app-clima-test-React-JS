import React, {Component} from 'react';

import LocationListContainer from './containers/LocationListContainer';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import App2 from './containers/fabri';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Ciudad de México,mx',
  'Madrid,es'
];

class App extends Component {
  
  render(){    
   
      return (        
          <MuiThemeProvider>
            <App2 id="fabri"></App2>
            <Grid>
              <Row>
                <Col xs={12}>
                   <AppBar title="Weather App" />
                  </Col> 
              </Row>
              <Row>
                <Col xs={12} md={6}>
                    <LocationListContainer cities={cities} ></LocationListContainer>                  
                </Col>
                <Col xs={12} md={6}>
                  <Paper zDepth={4}>
                    <div className="detail" >                                            
                        <ForecastExtendedContainer ></ForecastExtendedContainer>                                                             
                    </div>
                  </Paper>
                  
                </Col>
              </Row>
            </Grid>
          </MuiThemeProvider>
      );
    
  }
}


 export default App;
