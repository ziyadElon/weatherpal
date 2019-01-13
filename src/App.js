import React, { Component } from 'react';
import './App.css';
import * as WeatherAPI from './WeatherAPI';
import LocationData from './LocationData';

class App extends Component {

  state = {
    weatherData: {},
    location: ''
  }

  getData = () => {
    let location = document.getElementById('location-input').value;
    WeatherAPI.getWoeid(location)
      .then(id => WeatherAPI.getWeatherData(id))
      .then(data => this.setState({
        weatherData: data.consolidated_weather,
        location: data.title
      }))
      .catch((e) => WeatherAPI.showErrorMessage(e))
  }

  render() {
    return (
      <div className="App">
        <header>
          WeatherPal
        </header>
        <h1>Get the current temperature of any city in the world.</h1>
        <main>
          <div className="input-section">
            <label>Enter city name</label>
            <input id="location-input" type="text" placeholder="Enter location"></input>
            <button id="submit-button" onClick={this.getData}>Submit</button>
          </div>
          <LocationData data={this.state.weatherData} location={this.state.location} />
        </main>
      </div>
    );
  }
}

export default App;
