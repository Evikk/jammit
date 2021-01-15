import React, { Component } from 'react'
import { withRouter, NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/userActions.js'

class _Header extends Component {
    render() {
        const {loggedInUser} = this.props;
        return <header>
            <div className="logo">
                <NavLink to="/"><h1>Jammit 2000</h1></NavLink>
            </div>
            <div className="flex nav-right-side">
                {loggedInUser ? <div className="user-greet flex align-center">
                    <Link to={`user/${loggedInUser._id}`}><h2>Welcome {loggedInUser.fullname.split(' ')[0]}</h2></Link>
                    <span onClick={()=>this.props.logout()}>Sign out</span></div>
                    : <div className="user-greet flex align-center">Welcome Guest</div>}
                <nav className="fs24">
                    <NavLink to="/search">Jams</NavLink>
                    <NavLink to="/members">Members</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
            </div>
            
        </header>
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


export const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(_Header))