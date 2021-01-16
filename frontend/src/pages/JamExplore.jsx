import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { connect } from "react-redux";
import { loadJams } from "../store/actions/jamActions.js";
import { loadUsers } from "../store/actions/userActions.js";
import jamThumb from "../assets/img/jam-thumb.jpg"
import { JamScroll } from "../cmps/JamScroll.jsx";
import { JamList } from "../cmps/JamList.jsx";
import { JamPreview } from "../cmps/JamPreview.jsx";
import jamMarker from "../assets/img/green-marker.png"

const mapStyles = {
    width: "50%",
    height: "100%",
};

// const containerStyle = {
//     position: 'static',  
//     width: '100%',
//     height: '100%'
// }

const mapStyle = [
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#dceafa'
        }
      ]
    },
    {
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "on"
            }
        ]
    },
    ]
class _JamExplore extends Component {
    state = {
        markers: null,
        userPos: null,
        mapZoom: 14,
        showingInfoWindow: false, // Hides or shows the InfoWindow
        activeMarker: {}, // Shows the active marker upon click
        selectedPlace: null, // Shows the InfoWindow to the selected place upon a marker
    };
    mapRef = React.createRef();
    componentDidMount() {
        this.props.loadJams()
        navigator.geolocation.getCurrentPosition(pos =>{
            const userPos = {position: {lat: null, lng: null}}
            userPos.position.lat = pos.coords.latitude
            userPos.position.lng = pos.coords.longitude
            this.setState({selectedPlace: userPos, userPos: userPos})
            return pos.coords
        })
        this.setState({markers: this.displayMarkers()})
    }

    onMarkerClick = (props, marker) => {
        console.log('props', props);
        
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true,
            selectedPlace: props,
            mapZoom: 17
        });
    }

    onJamClick = (jamId) => {
        console.log(jamId);
        const marker  = this.state.markers.find(marker => {
            return marker.key === jamId
        })
        const props = marker.props
        console.log(marker, props);
        this.setState({
            selectedPlace: props,
            mapZoom: 17
        });
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
                return  <Marker key={jam._id} 
                    position={{
                        lat: jam.location.lat,
                        lng: jam.location.lng
                    }} 
                    onMousedown={this.onMarkerClick}
                    name={jam.title}
                    currMembers={jam.usersGoing.length}
                    capacity={jam.capacity}
                    icon={{
                        url: jamMarker,
                        anchor: new this.props.google.maps.Point(32,32),
                        scaledSize:  new this.props.google.maps.Size(50,50)
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
        const {userPos, selectedPlace, mapZoom, markers} = this.state
        if (!selectedPlace || jams.length === 0) return <h2>Loading...</h2>
        console.log(userPos);
        return (
            <>
            <section className="flex explore-container pos-relative">
                {/* <h1 className="jams-explore-title">Jams In Current Area</h1> */}
                {/* <JamScroll jams={this.props.jams} onJamClick={this.onJamClick}/> */}
                <button onClick={()=>{
                    const selectedPlaceCopy = {...selectedPlace}
                    selectedPlaceCopy.position.lat = userPos.position.lat
                    selectedPlaceCopy.position.lng = userPos.position.lng
                    this.setState({selectedPlace: selectedPlaceCopy, mapZoom: 15})
                    }}>Center</button>
                <Map
                    ref={this.mapRef}
                    // containerStyle={containerStyle}
                    google={this.props.google}
                    zoom={mapZoom}
                    style={mapStyles}
                    // centerAroundCurrentLocation={true}
                    initialCenter={{lat: selectedPlace.position.lat, lng: selectedPlace.position.lng}}
                    center={{lat: selectedPlace.position.lat, lng: selectedPlace.position.lng}}
                    onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
                    disableDefaultUI= {true}
                    // onBoundsChanged={this.centerMoved}
                >
                {markers}
                {loggedInUser && <Marker
                    name={'Your position'}
                    position={userPos.position}
                    icon={{
                    url: loggedInUser.imgUrl,
                    anchor: new this.props.google.maps.Point(32,32),
                    scaledSize:  new this.props.google.maps.Size(50,50)
                    }}
                    />}
                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                    <h2>{this.state.selectedPlace.name}</h2>
                    <h3>Capacity: {this.state.selectedPlace.currMembers} / {this.state.selectedPlace.capacity}</h3>
                </div>
                </InfoWindow>
            </Map>
            <div className="jams-explore-container">
                <div className="jams-explore-filter flex column">
                    <h1>Filter Jams</h1>
                    <div className="filter-inputs">
                        <select name="filterByInst">
                            <option value="">By Instrument Missing</option>
                            <option value="">Singer</option>
                            <option value="">Guitar</option>
                            <option value="">Drums</option>
                            <option value="">Bass</option>
                            <option value="">Keyboard</option>
                        </select>
                        <select name="filterByRegion">
                            <option value="">By Region</option>
                            <option value="">North</option>
                            <option value="">Center</option>
                            <option value="">South</option>
                        </select>
                        <input type="text" name="name" id=""/>
                    </div>
                </div>
                <ul className="jams-explore-list">
                    {jams.map((jam) => (
                        <JamPreview key={jam._id} jam={jam} onJamClick={this.onJamClick}/>
                    ))}
                </ul>
            </div>
            {/* <JamList jams={jams} onJamClick={this.onJamClick}/> */}
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
};

export const JamExplore = GoogleApiWrapper({
    apiKey: "AIzaSyBTd-r9ES9me88-mTQasKgom191cNMihjY",
})(connect(mapStateToProps, mapDispatchToProps)(_JamExplore));
