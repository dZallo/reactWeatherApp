import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WEATHER APP</h1>
          <LocationList></LocationList>
        </header>
      </div>
    );
  }
}

export default App;
