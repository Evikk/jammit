import React, { Component } from 'react'
import { jamService } from '../services/jamService'
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import {MapContainer } from '../cmps/MapContainer'
// import { loadJams } from '../store/actions/jamActions'


export class JamDetails extends Component {
    state = {
        jam: null
    }

    async componentDidMount() {
        var jam = await jamService.getById(this.props.match.params.id);
        this.setState({ jam });
    }


    render() {
        return (
            <section className="jam-details">

                {!this.state.jam && <div> Loading... </div>}
                {this.state.jam &&
                    <div>
                        <div className="jam-title-img-con">
                        <h1 className="jam-title">{this.state.jam.title}</h1>
                        </div>
                        <h3> Details </h3>
                        <p><span><PeopleAltRoundedIcon/></span><span>{this.state.jam.capacity}</span> people responded</p>
                        <p><span><EmojiPeopleRoundedIcon/></span>Event by <span> {this.state.jam.createdBy.fullname}</span></p>
                        <p><span><RoomRoundedIcon /></span>{this.state.jam.location.address}</p>
                        <p> <span><AccessTimeRoundedIcon /></span>{this.state.jam.startsAt} - Duration </p>
                        <h3>About</h3>
                        <p>{this.state.jam.description}</p>
                        <h3> Location </h3>
                       <div> <MapContainer lat={this.state.jam.location.lat} lng={this.state.jam.location.lng} /></div>
                        <p>Our event will be held at the <strong>{this.state.jam.location.address}</strong></p>
                    </div>}
            </section>
        )
    }
}

