import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class _Header extends Component {
    render() {
        const {loggedInUser} = this.props;
        return <header>
            <div className="logo">
                <NavLink to="/"><h1>Jammit 2000</h1></NavLink>
            </div>
            <div className="flex nav-right-side">
                {loggedInUser && <div className="user-greet flex align-center" onClick={()=>this.props.history.push(`user/${loggedInUser._id}`)}>
                    <h2>Welcome {loggedInUser.fullname.split(' ')[0]} </h2><span>Sign out</span>
                </div>}
                <nav className="fs24">
                    <NavLink to="/jams">Jams</NavLink>
                    <NavLink to="/users">Members</NavLink>
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
const mapDispatchToProps = {}


export const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(_Header))