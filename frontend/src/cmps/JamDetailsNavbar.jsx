// import { useHistory } from "react-router-dom";
import React from 'react'
import { jamService } from '../services/jamService'
import JamGoingListModal from './JamGoingModal'

export function JamNavbar() {
    return (
        <ul className="jam-details-navbar">
            <div className="navbar-left">
                <li>About</li>
                <li>Discussion</li>
            </div>
            <div className="navbar-right">
                <li><button onClick={jamService.joinJam}>Join Jam</button></li>
                <li> <JamGoingListModal/> </li>
                <li><button>Invite</button></li>
            </div>
        </ul>
    );
}