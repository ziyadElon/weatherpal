import React, { Component } from 'react';

class LocationData extends Component {

  render() {
    let temp;
    let location;
    if(this.props.data.length > 0){
      temp = this.props.data[0].the_temp.toFixed(2);
      location = this.props.location;
    }
    
    return (
      <div className="location-data">
        { temp &&
          <div className="location-data__main">
            <h2>{location}:</h2>
            <strong className="location-data__temp">{temp} {String.fromCharCode(176)}C</strong>
          </div>
        }
      </div>
    );
  }
}

export default LocationData;