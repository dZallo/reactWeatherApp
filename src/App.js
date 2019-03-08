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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WEATHER APP</h1>
          <LocationList cities={cities}></LocationList>
        </header>
      </div>
    );
  }
}

export default App;
