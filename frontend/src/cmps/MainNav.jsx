import { withRouter, NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/userActions.js'
import React, { Component } from 'react'
import { mainNavService } from '../services/mainNavService.js'
import logoM from "../assets/img/logo-m.png"
import { socketService } from '../services/socketService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class _MainNav extends Component {


    componentDidMount() {
        if (this.props.loggedInUser) {
            socketService.setup()
            socketService.emit('user connection', this.props.loggedInUser._id);
            socketService.on('send',this.sendInvite)
            
        }
        mainNavService.setHomePageNavStyle()
    }

    sendInvite = (data)=> {
        const Invite = ()=> {
            return <div>
                <h3>{data.msg}</h3>
                <Link to={data.link}>Go To The Jam!</Link>
            </div>
        }
        toast(<Invite/>, {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    componentWillUnmount(){
        if (this.props.loggedInUser){
            socketService.off('user connection', this.props.loggedInUser._id)
            socketService.off('send',this.func)
            socketService.terminate()
            clearTimeout(this.timeout)
        }
    }
    componentDidUpdate() {
        // let {locationPathName }= this.props.location.pathname
        if( this.props.location.pathname !== '/'){
            mainNavService.setNavStyle()
        }else{
            mainNavService.setHomePageNavStyle()
        }
    }

    render() {
        const { loggedInUser } = this.props;
        return (
            <>
            <nav className="navbar flex">
                <div className="nav-links">
                    <NavLink to="/" className="top-nav-logo"><img src={logoM} alt="logo"/></NavLink>
                    <NavLink to="/search">Jams</NavLink>
                    <NavLink to="/members">Members</NavLink>
                </div>
                <div className="user-nav">
                    {loggedInUser ? <NavLink className="user-avater-link" to="/user">
                        <div className="avatar-wrapper pdding">
                            <img alt="logged-user" src={loggedInUser.imgUrl} />
                        </div>
                    </NavLink>
                    :
                    <NavLink to="/login">Login</NavLink>}
                </div>
            </nav>
            <ToastContainer/>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}
const mapDispatchToProps = {
    logout
}


export const MainNav = withRouter(connect(mapStateToProps, mapDispatchToProps)(_MainNav))


// idan raichel id 6005e093bf4a64698823123e
// tomer id 6005e093bf4a646988231239