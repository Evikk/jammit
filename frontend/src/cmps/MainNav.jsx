import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/userActions.js'
import React, { Component } from 'react'
import { mainNavService } from '../services/mainNavService.js'
import recordlogo from "../assets/img/recordlogo.png"
import logoM from "../assets/img/logo-m.png"
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
                    <NavLink to="/" className="top-nav-logo"><img src={logoM} alt="logo"/></NavLink>
                    <NavLink to="/search">Jams</NavLink>
                    <NavLink to="/members">Members</NavLink>
                </div>
                <div className="user-nav">
                    {loggedInUser ? <NavLink className="user-avater-link" to="/user">
                        <div className="avatar-wrapper pdding">
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
