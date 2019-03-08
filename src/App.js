import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities=[
  'Bilbao,ES',
  'Madrid,ES',
  'London,UK',
  'Buenos Aires, ar'

];
class App extends Component {
  handleSelectionLocation = city =>{
    console.log("handleSelectionLocation App ");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WEATHER APP</h1>
          <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
        </header>
      </div>
    );
  }
}

export default App;
