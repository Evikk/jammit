import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import  { Component } from 'react'

export class _MapContainer extends Component {


    render() {
        const containerStyle = {
            position: 'relative',
            width: '300px',
            height: '300px'
        }

        return (
            <Map
                google={this.props.google}
                zoom={14}
                containerStyle={containerStyle}
                initialCenter={{
                    lat: this.props.lat,
                    lng: this.props.lng
                }}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{"this.state.selectedPlace.name"}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export const MapContainer = GoogleApiWrapper({
    apiKey: ('AIzaSyBTd-r9ES9me88-mTQasKgom191cNMihjY')
})(_MapContainer)