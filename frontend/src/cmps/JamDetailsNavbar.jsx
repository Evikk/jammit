// import { useHistory } from "react-router-dom";
import React, { Component } from 'react'
import { LoginModal } from './LoginModal'
import { InviteModal} from  './InviteModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class _JamNavbar extends Component {
    state = {
        showLoginModal: false,
        showInviteModal: false,
       
    }

    sendJoinMsg = ()=> {
        const joinMsg = 
        `You Joined ${this.props.jam.title}!!`
        toast(joinMsg, {
            position: "bottom-right",
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
 
    handleCloseInviteModal() {
        this.setState({showInviteModal: false});
    }
    isUserGoingToJam() {
        return this.props.jam.usersGoing.filter((userGoing) => userGoing._id === this.props.user._id).length !== 0;

    }
    render() {
   
        let { updateJamGoing, jam, user, isUserAdmin } = this.props;
        return (
            <>
            <ToastContainer/>
            <ul className="jam-details-navbar">
                
                <div className="navbar-right">
                    <LoginModal history={this.props.history} showModal={this.state.showLoginModal}/>
                    <InviteModal jamTitle={jam.title} jamId={jam._id} history={this.props.history} following={this.props.user?this.props.user.following:[]} handleCloseModal={this.handleCloseInviteModal.bind(this)} showModal={this.state.showInviteModal} />
                    {!user &&
                        <li><button className="join-jam-btn" onClick={() => this.setState({
                            showLoginModal: true
                        })}>Join Jam</button></li>}
                    {user && !this.isUserGoingToJam()&&
                        <li><button className="join-jam-btn" onClick={() => {
                            updateJamGoing(jam, { ...user, playing: ['Singer'] }, true)
                            this.sendJoinMsg()
                            }}>Join Jam</button></li>}
                    {!isUserAdmin && user &&  this.isUserGoingToJam() &&
                        <li><button className="leave-jam-btn" onClick={() => updateJamGoing(jam, user, false)}>Leave Jam</button></li>}
                    {isUserAdmin && <li><button className="edit-jam-btn">Edit Details</button></li>}
                    {!user &&
                        <li><button className="invite-jam-btn" onClick={() => this.setState({
                            showLoginModal: true
                        })}>Invite</button></li>}
                    {user && this.isUserGoingToJam() &&
                        <li><button className="invite-jam-btn" onClick={() => this.setState({
                            showInviteModal: true
                        })}>Invite</button></li>}


                </div>
            </ul>
            </>
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