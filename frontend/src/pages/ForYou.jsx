import React, { Component } from "react";
import { connect } from "react-redux";
import { userService } from "../services/userService";
import { loadUsers } from "../store/actions/userActions";
import { loadJams } from "../store/actions/jamActions";
import { UserInfo } from "../cmps/UserProfile/UserInfo";
import { UserTalents } from "../cmps/UserProfile/UserTalents";
import { JamScroll } from "../cmps/JamScroll";

class _ForYou extends Component {
    
    state = {}

    filterMembersByFollow = () => {
        return this.props.users.filter((user) => {
            return user.followers.find(
                (user) => user._id === this.props.loggedInUser._id
            );
        });
    };

    filterJamsByInst = () => {
        return this.props.jams.filter((jam) => {
            const user = jam.usersGoing.find((user) => {
                return user.playing.some((inst) => {
                    return inst === this.props.loggedInUser.talents[0];
                });
            });
            if (!user) return jam;
        });
    };

    filterJamsByRegion = () => {
        return this.props.jams.filter((jam) => {
            return (
                jam.location.region === this.props.loggedInUser.location.region
            );
        });
    };
    render() {
        const { loggedInUser } = this.props;
        if (!loggedInUser) return <h2>Loading...</h2>;
        return (
            <div className="for-you-section">
                <ul className="jam-details-navbar">
                    <div className="navbar-left">
                        <li>About</li>
                        <li>Events</li>
                    </div>
                </ul>
                <div className="for-you-content flex">
                    <div className="profile-container-side flex column">
                        <UserInfo user={loggedInUser} isUserAdmin={true} />
                        <UserTalents user={loggedInUser} isUserAdmin={true} />
                    </div>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        jams: state.jamModule.jams,
        users: state.userModule.users,
        loggedInUser: state.userModule.loggedInUser,
    };
};
const mapDispatchToProps = {
    loadJams,
    loadUsers,
};

export const ForYou = connect(mapStateToProps, mapDispatchToProps)(_ForYou);
