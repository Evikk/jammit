import React from 'react';

export class StaticMap extends React.Component {
 
    render() {
        const API_KEY = 'AIzaSyBTd-r9ES9me88-mTQasKgom191cNMihjY';
        return (
            <div>
                <img alt="static-map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.lat},${this.props.lng}&zoom=15&size=500x300&key=${API_KEY}&markers=color:purple|scale:2|${this.props.lat},${this.props.lng}` } />
            </div>
        )
    }
}

