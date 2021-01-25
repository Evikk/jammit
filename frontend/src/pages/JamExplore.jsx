import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { connect } from "react-redux";
import { loadJams, updateJamGoing } from "../store/actions/jamActions.js";
import { loadUsers } from "../store/actions/userActions.js";
// import jamMarker from "../assets/img/green-marker.png"
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import Loader from "react-loader-spinner";
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
// import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import { Link } from "react-router-dom"
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { JamNavbar } from '../cmps/JamDetailsNavbar';

const mapStyles = {
    width: "100%",
    height: "100%",
};

const mapStyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6195a0"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "0"
            },
            {
                "saturation": "0"
            },
            {
                "color": "#f5f5f2"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-3"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bae5ce"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fac9a9"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#787878"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#0a00ff"
            },
            {
                "saturation": "-77"
            },
            {
                "gamma": "0.57"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#43321e"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ff6c00"
            },
            {
                "lightness": "4"
            },
            {
                "gamma": "0.75"
            },
            {
                "saturation": "-68"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#eaf6f8"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c7eced"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-49"
            },
            {
                "saturation": "-53"
            },
            {
                "gamma": "0.79"
            }
        ]
    }
]
class _JamExplore extends Component {
    state = {
        markers: null,
        userPos: null,
        mapZoom: 14,
        showingInfoWindow: false, // Hides or shows the InfoWindow
        activeMarker: {}, // Shows the active marker upon click
        selectedPlace: null, // Shows the InfoWindow to the selected place upon a marker
        isPopupShow: false,
        selectedJam: null
    };

    mapRef = React.createRef();
    componentDidMount() {
        this.props.loadJams()
        navigator.geolocation.getCurrentPosition(pos => {
            const userPos = { position: { lat: null, lng: null } }
            userPos.position.lat = pos.coords.latitude
            userPos.position.lng = pos.coords.longitude
            this.setState({ selectedPlace: userPos, userPos: userPos })
            return pos.coords
        })
        this.setState({ markers: this.displayMarkers() })
    }

    timeFormatter = () => {
        return <div>
            <span>{new Intl.DateTimeFormat('il', { month: 'short' }).format(new Date(this.state.selectedJam.startsAt))}</span><span>-</span>
            <span>{new Date(this.state.selectedJam.startsAt).toLocaleString('he-IL', { day: '2-digit', hour: '2-digit', minute: '2-digit' })}</span>
        </div>
    }

    onMarkerClick = (props, marker) => {
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true,
            selectedPlace: props,
            mapZoom: 17
        });
        this.setState({ isPopupShow: true, selectedJam: props.jam })
    }

    componentDidUpdate(prevProps) {
        if (this.props.jams !== prevProps.jams) {
            this.setState({ markers: this.displayMarkers() });
            if (this.state.activeMarker && this.state.activeMarker.position) {
                this.setState({ selectedJam : this.props.jams.filter( (jam) => jam._id === this.state.activeMarker.jam._id )[0]});
                /*this.setState({
                    activeMarker: {...this.state.activeMarker , jam: this.props.jams.filter( (jam) => jam._id === this.state.activeMarker.jam._id )[0]}
                });*/
               
            }
          
        }
    }

    onJamCenter = (jamId) => {
        const marker = this.state.markers.find(marker => {
            return marker.key === jamId
        })
        const props = marker.props
        this.setState({
            selectedPlace: props,
            mapZoom: 17
        });
    }

    getUserMarker = ()=>{
        if (this.props.loggedInUser.markerImg) return this.props.loggedInUser.markerImg
        return this.props.loggedInUser.imgUrl
    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    displayMarkers = () => {
        return this.props.jams.map(jam => {
            return <Marker key={jam._id}
                position={{
                    lat: jam.location.lat,
                    lng: jam.location.lng
                }}
                onMousedown={this.onMarkerClick}
                jam={jam}
                title={jam.title}
                imgUrl={jam.imgUrl}
                currMembers={jam.usersGoing.length}
                capacity={jam.capacity}
                icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
                    // url: jamMarker,
                    anchor: new this.props.google.maps.Point(32, 32),
                    scaledSize: new this.props.google.maps.Size(50, 50)
                }}
            />
        });
    }

    //   centerMoved(mapProps, map) {
    //       console.log(map.center.lat());

    //   }
    _mapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyle
        })
    }

    render() {
        const { jams, loggedInUser } = this.props
        const { userPos, selectedPlace, mapZoom, markers, isPopupShow } = this.state
        const jam = this.state.selectedJam
        if (!selectedPlace || jams.length === 0) {
            return <div className="loader main-content pos-relative">
                <Loader type="Bars" color="#00475F" height={200} width={200} timeout={5000} />
            </div>
        }
        return (
            <>
                <section className="flex explore-container pos-relative">
                    <button className="center-map-btn" onClick={() => {
                        const selectedPlaceCopy = { ...selectedPlace }
                        selectedPlaceCopy.position.lat = userPos.position.lat
                        selectedPlaceCopy.position.lng = userPos.position.lng
                        this.setState({ selectedPlace: selectedPlaceCopy, mapZoom: 15 })
                    }}><GpsFixedIcon style={{ fontSize: 40 }} /></button>
                    <Map
                        ref={this.mapRef}
                        // containerStyle={containerStyle}
                        google={this.props.google}
                        zoom={mapZoom}
                        style={mapStyles}
                        // centerAroundCurrentLocation={true}
                        initialCenter={{ lat: selectedPlace.position.lat, lng: selectedPlace.position.lng }}
                        center={{ lat: selectedPlace.position.lat, lng: selectedPlace.position.lng }}
                        onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
                        disableDefaultUI={true}
                    // onBoundsChanged={this.centerMoved}
                    >
                        {markers}
                        {loggedInUser && <Marker
                            name={'Your position'}
                            position={userPos.position}
                            icon={{
                                url: this.getUserMarker(),
                                // anchor: new this.props.google.maps.Point(32, 32),
                                scaledSize: new this.props.google.maps.Size(50, 50),
                                origin: new this.props.google.maps.Point(0, 0),
                                anchor: new this.props.google.maps.Point(17, 34),
                            }}
                        />}
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h2>{this.state.selectedPlace.title}</h2>
                            </div>
                        </InfoWindow>
                    </Map>
                    {isPopupShow &&
                        <div className="jam-popup">
                            <div className="details-con">
                                <div className="close-details">
                                    <h3 >{jam.title} </h3>
                                    <span onClick={()=>this.setState({isPopupShow: false})}>&times;</span> 
                                </div>
                                <div className="map-thumb-wrapper" onClick={() => this.props.history.push(`jam/${jam._id}`)}>
                                    <img src={jam.imgUrl} alt="jam-thumbnail" />
                                </div>
                                <JamNavbar
                                history={this.props.history}
                                user={this.props.loggedInUser}
                                jam={jam}
                                updateJamGoing={this.props.updateJamGoing}
                                isUserAdmin={false}
                                showBasicActionsOnly={true}
                                />
                                <h3 className="title-style">Details</h3>
                                <p><span className="icon-style"><HourglassEmptyRoundedIcon /></span><span className="details-style">{jam.capacity - jam.usersGoing.length} Slots Available</span></p>
                                <p><span className="icon-style"><PeopleAltRoundedIcon /></span> <span className="details-style">{jam.usersGoing.length} People going</span></p>
                                <p><span className="icon-style"><EmojiPeopleRoundedIcon /></span> <span className="details-style">Created by <Link to={"/user/" + jam.createdBy._id} > {jam.createdBy.fullname}</Link></span></p>
                                <p><span className="icon-style"><RoomOutlinedIcon /></span> <span className="details-style">{jam.location.address}, {jam.location.city}</span></p>
                                <p><span className="icon-style"><AccessTimeRoundedIcon /></span> <span className="details-style">{this.timeFormatter()}</span></p>
                                <div className="description-con">
                                    <h3 className="title-style">Description</h3>
                                    <p>{jam.description}</p>
                                </div>
                                <ul className="jam-card-tags big-tags flex">{jam.tags.map((tag, idx) => {
                                    return <li key={idx}>{tag}</li>
                                })}
                                </ul>
                            </div>
                        </div>
                    }
                </section>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        jams: state.jamModule.jams,
        users: state.userModule.users,
        loggedInUser: state.userModule.loggedInUser
    };
};
const mapDispatchToProps = {
    loadJams,
    loadUsers,
    updateJamGoing
};

export const JamExplore = GoogleApiWrapper({
    apiKey: "AIzaSyBTd-r9ES9me88-mTQasKgom191cNMihjY",
})(connect(mapStateToProps, mapDispatchToProps)(_JamExplore));
