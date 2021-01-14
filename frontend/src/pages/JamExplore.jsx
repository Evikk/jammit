import React, { Component } from "react";
import { connect } from "react-redux";
import { loadJams } from "../store/actions/jamActions.js";
import { loadUsers } from "../store/actions/userActions.js";
import { MapContainer } from "../cmps/MapContainer.jsx";
// import { JamList } from '../cmps/JamList.jsx'

class _JamExplore extends Component {
    state = {};

    render() {

       return (
           <MapContainer/>
       );
    }
}

const mapStateToProps = (state) => {
    return {
        jams: state.jamModule.jams,
        users: state.userModule.users,
    };
};
const mapDispatchToProps = {
    loadJams,
    loadUsers,
};

export const JamExplore = connect(
    mapStateToProps,
    mapDispatchToProps
)(_JamExplore);
