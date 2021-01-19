import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/userActions.js'
import React, { Component } from 'react'
import { mainNavService } from '../services/mainNavService.js'
import recordlogo from '../assets/recordlogo.png'
class _MainNav extends Component {


    componentDidMount() {
        console.log(this.props.location.pathname, 'componentDidMount');
        console.log(this.props ,'props componentDidMount');
        mainNavService.setHomePageNavStyle()
    }

    componentDidUpdate() {
        // let {locationPathName }= this.props.location.pathname
        if( this.props.location.pathname !== '/'){
            console.log(this.props.location.pathname, 'otherpathname');
            mainNavService.setNavStyle()
        }else{
            console.log(this.props.location.pathname, 'homepagepathname');
            console.log(this.props.location, 'homepagepathname');
            mainNavService.setHomePageNavStyle()
        }
    }

    render() {
        const { loggedInUser } = this.props;
        return (
            <nav className="navbar">
                <div className="logo fs30">
                    <NavLink to="/">Jameet<span className="fs20"> people&music</span></NavLink>
                </div>
                <div>
                    <NavLink to="/search" className="jams-nav-link">Jams</NavLink>
                    <NavLink to="/members" className="members-nav-link">Members</NavLink>
                    {loggedInUser && <div className="loggedin-avatar flex fs12">
                        <img src={loggedInUser.imgUrl} className="cursor-pointer" onClick={() => this.props.history.push(`/user/${loggedInUser._id}`)} />
                    </div>
                    }
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
