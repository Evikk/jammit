import { withRouter, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/userActions.js'
import React, { Component } from 'react'

class _MainNav extends Component {

    render() {
        const {loggedInUser} = this.props;
        return (
            <nav className="navbar">
                <div className="logo fs30">
                    <NavLink to="/">Jameet<span className="fs20"> people&music</span></NavLink>
                </div>
                <div>
                    <NavLink to="/search">Jams</NavLink>
                    <NavLink to="/members">Members</NavLink>
                    {loggedInUser ? <div className="loggedin-avatar flex fs12">
                <img src={loggedInUser.imgUrl} className="cursor-pointer" onClick={()=>this.props.history.push(`/user/${loggedInUser._id}`)}/>
                    </div>
                    : <div>Hi Guest</div>}
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
