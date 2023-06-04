import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import styles from '@/styles/components/map.module.css'

class MapContainer extends Component {
  state = {
    placeName: ''
  };

  componentDidMount() {
    const { google } = this.props;
    const geocoder = new google.maps.Geocoder();

    const markerPosition = {
      lat: -7.771609,
      lng: 110.377674,
    };

    geocoder.geocode({ location: markerPosition }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.setState({ placeName: results[0].formatted_address });
        } else {
          console.log('No results found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  }

  render() {
    const mapContainerStyles = {
      width: '100%',
      height: '300px',
      position: 'relative',
    };

    const mapStyles = {
      width: '100%',
      height: '100%',
      borderRadius: '15px',
    };

    const markerPosition = {
      lat: -7.771609,
      lng: 110.377674,
    };

    const { placeName } = this.state;

    return (
      <>
      <div className={styles.label}>
        <h6>Lokasi Anda</h6>
        <h3>Universitas Gadjah Mada</h3>
      </div>
      
      <div style={mapContainerStyles}>
        <h2>{placeName}</h2>
        <Map 
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={markerPosition}
        >
          <Marker position={markerPosition} />
        </Map>
      </div>
      </>
    ); 
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
})(MapContainer);