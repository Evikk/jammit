import React, { Component } from 'react'
import { jamService } from '../services/jamService'
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import AudiotrackRoundedIcon from '@material-ui/icons/AudiotrackRounded';
import { MapContainer } from '../cmps/MapContainer';
import { JamUserPreview } from '../cmps/JamUserPreview';
import { utilService } from '../services/utilService';
import { Link } from 'react-router-dom';
import { JamNavbar } from '../cmps/JamDetailsNavbar';
import JamGoingListModal from '../cmps/JamGoingModal';
import { connect } from 'react-redux';
import { updateJamGoing, loadJams } from '../store/actions/jamActions.js';
// import { jamGoingListModal } from '../cmps/JamGoingModal'
// import { loadJams } from '../store/actions/jamActions'


class _JamDetails extends Component {
    state = {
        jam: null
    }


    componentDidMount() {
        this.props.loadJams()
        console.log(this.props);
        const jam = jamService.getById(this.props.match.params.id);
        this.setState({ jam })
    }

    componentDidUpdate(prevProps) {
        if (this.props.jams !== prevProps.jams) {
            console.log(this.props);

            this.setState({ jam: this.props.jams.find(jam => jam._id === this.props.match.params.id) });
        }
    }

    render() {
        const { jam } = this.state
        return (
            <section className="jam-details">
                {!this.state.jam && <div> Loading... </div>}
                {this.state.jam &&
                    <div className="page-con">
                        <div className="jam-title-img-con">
                            <h1 className="jam-title">{this.state.jam.title}</h1>
                        </div>
                        {this.props.loggedInUser && <div >
                            <JamNavbar user={{
                                fullname: this.props.loggedInUser.fullname,
                                imgUrl: this.props.loggedInUser.imgUrl,
                                _id: this.props.loggedInUser._id,
                                playing: ["Electric Guitar"]
                            }} jam={this.state.jam}
                                updateJamGoing={this.props.updateJamGoing} />
                        </div>}
                        <div className="page-content">
                            <div className="left-page-details">
                                <div className="details-con">
                                    <h3 className="title-style"> Details </h3>
                                    <p><span><AudiotrackRoundedIcon /></span><span>{this.state.jam.capacity}</span> jammers capacity</p>
                                    <p><span className="icon-style"><PeopleAltRoundedIcon /></span> <span className="details-style">{this.state.jam.usersGoing.length}</span> <span className="details-style">people going</span></p>
                                    <p><span className="icon-style"><EmojiPeopleRoundedIcon /></span> <span className="details-style">Event by</span> <Link to={"/user/" + this.state.jam.createdBy._id} > <span>{this.state.jam.createdBy.fullname}</span></Link></p>
                                    <p><span className="icon-style"><RoomRoundedIcon /></span> <span className="details-style">{this.state.jam.location.address}, {this.state.jam.location.city}</span></p>
                                    <p> <span className="icon-style"><AccessTimeRoundedIcon /></span> <span className="details-style">{utilService.getFormattedDate(this.state.jam.startsAt)}</span></p>
                                    <div className="description-con">
                                        <h3 className="title-style">Description</h3>
                                        <p>{this.state.jam.description}</p>
                                    </div>
                                    <div className="jam-tags">
                                        <ul className="jam-card-tags flex">{jam.tags.map((tag, idx) => {
                                            return <li key={idx}>{tag}</li>
                                        })}
                                        </ul>
                                    </div>
                                </div>

                                <div className="users-going-con followers">
                                    {jam.usersGoing.map((userGoing, idx) => {
                                        return <img className="follower-avatar" src={userGoing.imgUrl} key={idx} />
                                    })}
                                    <JamGoingListModal /> 
                                </div>


                                {/* <ul className="users-going-con">
                                    {this.state.jam.usersGoing.map(function (user, index) {
                                        return <JamUserPreview key={index} user={user} />
                                    })}
                                    <li> <JamGoingListModal /> </li>
                                </ul> */}
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


const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser,
        jams: state.jamModule.jams
    }
}
const mapDispatchToProps = {
    loadJams,
    updateJamGoing
}

export const JamDetails = connect(mapStateToProps, mapDispatchToProps)(_JamDetails)