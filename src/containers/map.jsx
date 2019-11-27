import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

class Map extends Component {
  render() {
  	let lat = this.props.coordinates.latitude;
  	let lng = this.props.coordinates.longitude; // lat and lng are strings 

    let marker = null;
    let center = {lat: 0, lng: 0}
    // the API returns the coordinates as strings and parseFloat returns NaN for empty string 
    // so the if else is required to use the parseFloat
    if (Object.keys(this.props.coordinates).length > 0) {  
      center = {lat: parseFloat(lat), lng: parseFloat(lng)}; // lat and lng convert to float 
      marker = (
        <div
          style={{
            width: '15px',
            height: '15px',
            backgroundColor: 'blue',
            borderRadius: '50%'}}
          lat={lat}
          lng={lng}
        />
      );

      return (
        <div className="map" >
          <GoogleMapReact defaultCenter={center} defaultZoom={0}>
            {marker}
          </GoogleMapReact>
        </div>  
      );

    } else {

      return (
        <div>
          <h1>The Map is loading</h1>
        </div>
      );
    }


  }
} 

function mapStateToProps(state) {
  return {
    coordinates: state.coordinates
  };
}

export default connect(mapStateToProps)(Map);
