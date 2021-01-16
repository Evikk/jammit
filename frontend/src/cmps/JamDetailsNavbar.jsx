// import { useHistory } from "react-router-dom";
import React from 'react'


export function JamNavbar({updateJamGoing, jam, user}) {
    return (
        <ul className="jam-details-navbar">
            <div className="navbar-left">
                <li>About</li>
                <li>Discussion</li>
            </div>
            <div className="navbar-right">
                {user && jam.usersGoing.filter( (userGoing) => userGoing._id === user._id).length === 0  &&
                  <li><button className="join-jam-btn" onClick={() => updateJamGoing (jam, user, true)}>Join Jam</button></li> }
                  {user && jam.usersGoing.filter( (userGoing) => userGoing._id === user._id).length !== 0  &&
                  <li><button className="leave-jam-btn" onClick={() => updateJamGoing (jam, user, false)}>Leave Jam</button></li> }
                <li><button className="invite-jam-btn">Invite</button></li>
            </div>
        </ul>
    );
}