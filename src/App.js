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


      <div className="App">
        <header className="App-header">
          <h1>WEATHER APP</h1>
          <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
        </header>
      </div>

      /*
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

export default App;
