import React, { Component } from 'react'
import { jamService } from '../services/jamService'
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import { MapContainer } from '../cmps/MapContainer';
import AudiotrackRoundedIcon from '@material-ui/icons/AudiotrackRounded';
import { JamUserPreview } from '../cmps/JamUserPreview';
import { utilService } from '../services/utilService';
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
                    <div className="page-con">
                        <div className="jam-title-img-con">
                            <h1 className="jam-title">{this.state.jam.title}</h1>
                        </div>
                        <div className="page-content">
                            <div className="left-page-details">
                                <div className="details-con">
                                    <h3 className="title-style"> Details </h3>
                                    <p><span><AudiotrackRoundedIcon /></span><span>{this.state.jam.capacity}</span> members capacity</p>
                                    <p><span className="icon-style"><PeopleAltRoundedIcon /></span><span>{this.state.jam.usersGoing.length}</span> people responded</p>
                                    <p><span className="icon-style"><EmojiPeopleRoundedIcon /></span>Event by <span> {this.state.jam.createdBy.fullname}</span></p>
                                    <p><span className="icon-style"><RoomRoundedIcon /></span>{this.state.jam.location.address}, {this.state.jam.location.city}</p>
                                    <p> <span className="icon-style"><AccessTimeRoundedIcon /></span>{utilService.getFormattedDate(this.state.jam.startsAt)}- Duration </p>
                                </div>
                                <div className="about-con">
                                    <h3 className="title-style">About</h3>
                                    <p>{this.state.jam.description}</p>
                                </div>
                                <ul>
                                    {this.state.jam.usersGoing.map(function (user, index) {
                                        return <JamUserPreview key={index} user={user} />
                                    })}
                                </ul>
                            </div>
                            <div className="location-con">
                                <h3 className="title-style"> Location </h3>
                                <div> <MapContainer lat={this.state.jam.location.lat} lng={this.state.jam.location.lng} /></div>
                                <p>Our event will be held at the <strong>{this.state.jam.location.address}, {this.state.jam.location.city}</strong></p></div>
                        </div>
                    </div>}
            </section>
        )
    }
}

