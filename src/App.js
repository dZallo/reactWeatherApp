import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';

const cities = [
  'Bilbao,ES',
  'Madrid,ES',
  'London,UK',
  'Buenos Aires, ar'

];
class App extends Component {
  handleSelectionLocation = city => {
    console.log("handleSelectionLocation App " + city);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className="red">MD</div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className="green">MD</div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className="blue">MD</div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className="yellow">MD</div>
            </Col>
          </Row>
          </Grid>

      </MuiThemeProvider>



      /*<div className="App">
        <header className="App-header">
          <h1>WEATHER APP</h1>
          <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
        </header>
      </div>
      */
    );
  }
}

export default App;
