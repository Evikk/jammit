import React from 'react';

export class StaticMap extends React.Component {
 
    render() {
        const API_KEY = 'AIzaSyBTd-r9ES9me88-mTQasKgom191cNMihjY';
        return (
            <div>
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=500x300&key=${API_KEY}`} />
            </div>
        )
    }
}

