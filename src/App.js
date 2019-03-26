import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Bilbao,ES',
  'Madrid,ES',
  'London,UK',
  'Buenos Aires, ar'
];

class App extends Component {

  constructor() {
    super();
    //Solo se puede hacer state igual a  algo en el constructor
    //En todos los demas sitios se deberia usar el setState()
    this.state = { city: null };

  }
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant="title" color='inherit'>
                WeatherApp
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities}></LocationListContainer>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {city && <ForecastExtended city={city}></ForecastExtended>}
              </div>
            </Paper>

          </Col>
        </Row>
      </Grid>

      /*
      // la dos formas son validas
      {city  ?<ForecastExtended city={city}></ForecastExtended> :<h1>No se ha seleccionado una ciudad</h1>}
      {city && <ForecastExtended city={city}></ForecastExtended> }
      <MuiThemeProvider>
        <Grid fluid>
        <Row>
          <h1>Grid System:xs,sm,md,lg</h1>
        </Row>
        <Row>
          <h5>Las columnas se muestran en la misma fila mientras sumen 12</h5>
        </Row>
          <Row around ="xs">
            <Col xs={2}>
              <div className="red">MD</div>
            </Col>
            <Col xs={2}>
              <div className="green">MD</div>
            </Col>
            <Col xs={2}>
              <div className="blue">MD</div>
            </Col>
            <Col xs={2}>
              <div className="yellow">MD</div>
            </Col>
          </Row>
          </Grid>

      </MuiThemeProvider>
            */
    );
  }
}
// export default connect(null,mapDispatchToProps)(App);
export default App;
