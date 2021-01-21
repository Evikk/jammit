// import { useHistory } from "react-router-dom";
import React, { Component } from 'react'
import { LoginModal } from './LoginModal'
import { InviteModal} from  './InviteModal'



class _JamNavbar extends Component {
    state = {
        showLoginModal: false,
        showInviteModal: false
    }

    handleCloseInviteModal() {
        this.setState({showInviteModal: false});
    }
    render() {
        let { updateJamGoing, jam, user, isUserAdmin } = this.props;
        return (
            <ul className="jam-details-navbar">
                {!this.props.showBasicActionsOnly &&<div className="navbar-left">
                    <li>About</li>
                    <li>Discussion</li>
                </div>}
                <div className="navbar-right">
                    <LoginModal history={this.props.history} showModal={this.state.showLoginModal}/>
                    <InviteModal history={this.props.history} following={this.props.user?this.props.user.following:[]} handleCloseModal={this.handleCloseInviteModal.bind(this)} showModal={this.state.showInviteModal} />
                    {!user &&
                        <li><button className="join-jam-btn" onClick={() => this.setState({
                            showLoginModal: true
                        })}>Join Jam</button></li>}
                    {user && jam.usersGoing.filter((userGoing) => userGoing._id === user._id).length === 0 &&
                        <li><button className="join-jam-btn" onClick={() => updateJamGoing(jam, { ...user, playing: ['Singer'] }, true)}>Join Jam</button></li>}
                    {!isUserAdmin && user && jam.usersGoing.filter((userGoing) => userGoing._id === user._id).length !== 0 &&
                        <li><button className="leave-jam-btn" onClick={() => updateJamGoing(jam, user, false)}>Leave Jam</button></li>}
                    {isUserAdmin && <li><button className="edit-jam-btn">Edit Details</button></li>}
                    {!user &&
                        <li><button className="invite-jam-btn" onClick={() => this.setState({
                            showLoginModal: true
                        })}>Invite</button></li>}
                    {user && 
                        <li><button className="invite-jam-btn" onClick={() => this.setState({
                            showInviteModal: true
                        })}>Invite</button></li>}

                </div>
            </ul>
        );
    }
}

export const JamNavbar = _JamNavbar;
// const mapStateToProps = state => {
//     return {
//         loggedInUser: state.userModule.loggedInUser
//     }
// }
// const mapDispatchToProps = {
//     logout
// }


// export const navBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(JamNavbar))