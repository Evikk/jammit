import React, { Component } from "react";
import { connect } from "react-redux";
import { loadUsers } from "../store/actions/userActions";
import { loadJams } from "../store/actions/jamActions";
import { UserInfo } from "../cmps/UserProfile/UserInfo";
import { UserTalents } from "../cmps/UserProfile/UserTalents";
import { JamList } from "../cmps/JamList";

class _UserSection extends Component {

    state = {

    }

    componentDidMount() {
        this.props.loadJams()
        this.props.loadUsers()
    }

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

    render() {
        const { jams, loggedInUser } = this.props
        if (jams.length === 0 ) return <h2>loading...</h2>
        return (<>
            
            <main className="main-content user-section flex">
                <div className="user-details-aside flex column">
                    <UserInfo user={loggedInUser} isUserAdmin={true} />
                    <UserTalents user={loggedInUser} isUserAdmin={true} />
                </div>
                <div className="filtered-jams section">
                <div className="user-section-toolbar">
                <ul className="toolbar-left">
                    <li>Events</li>
                    <li>Members</li>
                </ul>
                <ul className="toolbar-right">
                    <li><button>Create Event</button></li>
                    <li><button>Manage Events</button></li>
                </ul>
            </div>
                    <h1>Jams You Might Like</h1>
                    <JamList jams={this.filterJamsByInst()} onJamClick={this.onJamClick}/>
                </div>
          </main>
        </>)
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

export const UserSection = connect(mapStateToProps, mapDispatchToProps)(_UserSection);