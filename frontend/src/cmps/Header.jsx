import React, { Component } from 'react'
import { withRouter, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/userActions.js'

class _Header extends Component {

    // onAvatarClick = (userId)=> {
    //     this.props.history.push(`user/${userId}`)
    //   }

    render() {
        const {loggedInUser} = this.props;
        return <header>
            
            <div className="logo fs40">
                <NavLink to="/">
                    Jameet
                    <span className="fs20"> people&music</span>
                </NavLink>
            </div>
            
            <div className="flex nav-right-side white">
                {/* {loggedInUser ? <div className="user-greet flex align-center white">
                    <Link to={`user/${loggedInUser._id}`}><h2>Welcome {loggedInUser.fullname.split(' ')[0]}</h2></Link>
                    <span onClick={()=>this.props.logout()}>Sign out</span></div>
                    : <div className="user-greet flex align-center">Welcome Guest</div>} */}
                <nav className="fs24">
                    <NavLink to="/search">Jams</NavLink>
                    <NavLink to="/members">Members</NavLink>
                {loggedInUser ? <div className="loggedin-avatar flex fs12">
                <img src={loggedInUser.imgUrl} alt="logged-in-user-avatar"className="cursor-pointer" onClick={()=>this.props.history.push(`/user/${loggedInUser._id}`)}/>
                    {/* <Link to={`user/${loggedInUser._id}`}></Link> */}
                    {/* <span onClick={()=>this.props.logout()}>Sign out</span> */}
                    </div>
                    : <div className="user-greet flex align-center">Hi Guest</div>}
                  {/* { loggedInUser ? <span className="cursor-pointer" onClick={()=>this.props.logout()}>Sign out</span> :<NavLink to="/login">Login</NavLink> } */}
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