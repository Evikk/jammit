import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/userActions.js'
import React, { Component } from 'react'
import { mainNavService } from '../services/mainNavService.js'
import recordlogo from "../assets/img/recordlogo.png"
class _MainNav extends Component {


    componentDidMount() {
        mainNavService.setHomePageNavStyle()
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
            <nav className="navbar flex">
                <div className="nav-links">
                    <NavLink to="/" className="top-nav-logo"><img src={recordlogo} alt="logo"/></NavLink>
                    <NavLink to="/search">Jams</NavLink>
                    <NavLink to="/members">Members</NavLink>
                </div>
                <div className="user-nav">
                    {loggedInUser ? <NavLink to="/user">
                        <div className="avatar-wrapper">
                            <img src={loggedInUser.imgUrl} />
                        </div>
                    </NavLink>
                    :
                    <NavLink to="/login">Login</NavLink>}
                </div>
            </nav>
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
