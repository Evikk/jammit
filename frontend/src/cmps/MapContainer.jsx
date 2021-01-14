import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react'


export class MapContainer extends Component {


    render() {
        const containerStyle = {
            position: 'relative',
            width: '100%',
            height: '100%'
        }

        return (
            <Map google={this.props.google} zoom={14} containerStyle={containerStyle} initialCenter={{
                lat: 40.854885,
                lng: -88.081807
            }}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>ahalan</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBTd-r9ES9me88-mTQasKgom191cNMihjY')
})(MapContainer)