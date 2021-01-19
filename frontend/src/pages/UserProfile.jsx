import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userService } from '../services/userService'
import { loadUsers } from '../store/actions/userActions'
import { loadJams } from '../store/actions/jamActions'
import { JamScroll } from '../cmps/JamScroll'
import { UserInfo } from '../cmps/UserProfile/UserInfo'
import { UserTalents } from '../cmps/UserProfile/UserTalents'
import Loader from 'react-loader-spinner'

class _UserProfile extends Component {

  state = {
    user: null,
    currUser: false,
    followToggle:false,
    userJams: []
  }

  onFollowIconClick =()=>{
    this.setState({followToggle: !this.state.followToggle})
  }

  async componentDidMount() {
    const user = await userService.getById(this.props.match.params.id)
    this.setState({ user })
    this.props.loadJams()
  }
  
  getUserJams = () => {
    return this.props.jams.filter(jam => {
      return jam.usersGoing.find(userGoing => {
        return userGoing._id === this.state.user._id
      })
    })
  }



  render() {
    const { user, followToggle } = this.state
    const { jams } = this.props
   if (jams.length === 0 || !user) {
     return <div className="loader main-content pos-relative">
       <Loader type="Bars" color="#00475F" height={200} width={200} timeout={5000} />
    </div>}
    return (
      <main className="main-content">
        <section className="user-box flex">
          <UserInfo 
            user={user} 
            followToggle={followToggle} 
            onFollowIconClick={this.onFollowIconClick}
          />
          <UserTalents user={user}/>
        </section>
        {this.getUserJams().length > 0 && <div className="jams section">
              <h1>Jams Attending</h1>
              <JamScroll jams={this.getUserJams()}/>
        </div>}
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    jams: state.jamModule.jams,
    users: state.userModule.users,
    // loggedInUser: state.userModule.loggedInUser
  }
}
const mapDispatchToProps = {
  loadJams,
  loadUsers,
}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)