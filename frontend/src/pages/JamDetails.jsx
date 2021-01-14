import React, { Component } from 'react'
import { jamService } from '../services/jamService'
import {MapContainer } from '../cmps/Map'
// import { loadJams } from '../store/actions/jamActions'


export class JamDetails extends Component {
    state = {
        jam: null
    }

    async componentDidMount() {
        var jam = await jamService.getById(this.props.match.params.id);
        this.setState({ jam });
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.jam !== this.state.jam) {
    //         let lat = this.state.jam.location.lat;
    //         let lng = this.state.jam.location.lng;
    //         jamMap.initMap(lat, lng)
    //             .then(() => {
    //                 jamMap.addMarker({ lat, lng });
    //             })
    //             .catch(console.log('INIT MAP ERROR'));
    //     }
    // }


    render() {
        return (
            <section className="jam-details">

                {!this.state.jam && <div> Loading... </div>}
                {this.state.jam &&
                    <div>
                        <h1>{this.state.jam.title}</h1>
                        <h3> Details </h3>
                        <p><span>{this.state.jam.capacity}</span> people responded</p>
                        <p>Event by <span><a>{this.state.jam.createdBy.fullname}</a></span></p>
                        <p>{this.state.jam.location.address}</p>
                        <h3>About</h3>
                        <p>{this.state.jam.description}</p>
                        <h3> Location </h3>
                        <MapContainer/>
                    </div>}
            </section>
        )
    }
}

