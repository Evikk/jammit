import React, { Component } from 'react'
import { jamService } from '../services/jamService'
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import HomeIcon from '@material-ui/icons/Home';
import { MapContainer } from '../cmps/MapContainer';
import { JamUserPreview } from '../cmps/JamUserPreview';
import { utilService } from '../services/utilService';
import { Link } from 'react-router-dom';
import { JamNavbar } from '../cmps/JamDetailsNavbar';
import JamGoingListModal from '../cmps/JamGoingModal';
import { connect } from 'react-redux';
import { updateJamGoing, loadJams, saveJam } from '../store/actions/jamActions.js';
// import { jamGoingListModal } from '../cmps/JamGoingModal'
// import { loadJams } from '../store/actions/jamActions'
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';

const emptyJam = {
    title: "",
    description: "",
    imgUrl: "http://some-img",
    capacity: null,
    location: {
        region: "",
        city: "",
        address: "",
        lat: null,
        lng: null
    },
    createdBy: {},
    startsAt: null,
    tags: [],
    createdAt: null,
    usersGoing: []
}

class _JamDetails extends Component {
    state = {
        jam: null,
        isUserAdmin: false,
        isEditMode: false
    }


    componentDidMount() {
        this.props.loadJams()
        if (this.props.isEditMode) {
            this.setState({ jam: emptyJam, isEditMode: true, isUserAdmin: true })
        }
        else {
            const jam = jamService.getById(this.props.match.params.id);
            this.setState({ jam }, () => {
                this.checkIfUserHost()
            })
        }
    }

    componentWillReceiveProps(props){
        if (props.isSubmit) {
            const miniUser = {}
            miniUser._id = this.props.loggedInUser._id
            miniUser.fullname = this.props.loggedInUser.fullname
            miniUser.imgUrl = this.props.loggedInUser.imgUrl
            miniUser.playing = this.props.loggedInUser.talents
            this.props.saveJam(this.state.jam, miniUser)
            this.props.jamSaved()
        }
        this.setState({jam: props.jam})
    }

    componentDidUpdate(prevProps) {
        if (this.state.isEditMode) return
        if (this.props.jams !== prevProps.jams) {
            this.setState({ jam: this.props.jams.find(jam => jam._id === this.props.match.params.id) });
        }
    }

    checkIfUserHost = () => {
        if (!this.props.loggedInUser) return
        if (this.props.loggedInUser._id === this.state.jam.createdBy._id) {
            this.setState({ isUserAdmin: true })
        }
    }

    render() {
        const { jam, isEditMode, isUserAdmin } = this.state
        return (
            <section className="jam-details">
                {!this.state.jam && <div> Loading... </div>}
                {this.state.jam &&
                    <div className="page-con">
                        <div className="jam-title-img-con">
                            {isUserAdmin && <button className="jam-save-btn"
                                onClick={() => {
                                    if (this.state.isEditMode) this.onSaveChanges()
                                    this.setState({ isEditMode: !isEditMode })
                                }}
                            >
                                {isEditMode ? "Save Changes" : "Edit Details"}
                            </button>}
                            <h1 className="jam-title">{this.state.jam.title}</h1>
                        </div>
                        {!this.state.isEditMode &&  <div>
                            <JamNavbar
                                history={this.props.history}
                                user={this.props.loggedInUser}
                                jam={this.state.jam}
                                updateJamGoing={this.props.updateJamGoing}
                                isUserAdmin={this.state.isUserAdmin}
                            />
                        </div>}
                        <div className="page-content">
                            <div className="left-page-details">
                                <div className="details-con">
                                    <h3 className="title-style">Details</h3>
                                    <p><span className="icon-style"><HourglassEmptyRoundedIcon/></span><span className="details-style">{this.state.jam.capacity - this.state.jam.usersGoing.length} Slots Available</span></p>
                                    <p><span className="icon-style"><PeopleAltRoundedIcon /></span> <span className="details-style">{this.state.jam.usersGoing.length} People going</span></p>
                                    {!isEditMode && <p><span className="icon-style"><EmojiPeopleRoundedIcon /></span> <span className="details-style">Created by <Link to={"/user/" + this.state.jam.createdBy._id} > {this.state.jam.createdBy.fullname}</Link></span></p>}
                                    <p><span className="icon-style"><RoomRoundedIcon /></span> <span className="details-style">{this.state.jam.location.address}, {this.state.jam.location.city}</span></p>
                                    <p><span className="icon-style"><AccessTimeRoundedIcon /></span> <span className="details-style">{utilService.getFormattedDate(this.state.jam.startsAt)}</span></p>
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
                                {!isEditMode && <div className="users-going-con-section">
                                    <ul className="users-going-con">
                                        {this.state.jam.usersGoing.slice(0, 3).map(function (user, index) {
                                            return <JamUserPreview key={index} user={user} />
                                        })}

                                    </ul>
                                    <div className="users-going-actions"> <JamGoingListModal usersGoing={this.state.jam.usersGoing} /> </div>
                                </div>}

                            </div>
                            <div className="location-con">
                                <h3 className="title-style">Location</h3>
                                <div><MapContainer lat={this.state.jam.location.lat} lng={this.state.jam.location.lng}/></div>
                            </div>
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
    saveJam,
    updateJamGoing
}

export const JamDetails = connect(mapStateToProps, mapDispatchToProps)(_JamDetails)