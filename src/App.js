import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WEATHER APP</h1>
          <WeatherLocation city="Bilbao,ES"></WeatherLocation>
        </header>
      </div>
    );
  }
}

export default App;
