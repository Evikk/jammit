import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userService } from '../services/userService'
import { loadUsers } from '../store/actions/userActions'
import { loadJams } from '../store/actions/jamActions'
import { JamScroll } from '../cmps/JamScroll'
import { UserInfo } from '../cmps/UserProfile/UserInfo'
import { UserTalents } from '../cmps/UserProfile/UserTalents'

class _UserProfile extends Component {

  state = {
    user: null,
    currUser: false,
    followToggle:false
  }

  // async componentDidMount() {
  //   const user = await userService.getById(this.props.match.params.id)
  //   this.setState({user})
  // }
  onFollowIconClick =()=>{
    const followToggle = this.state
    console.log(followToggle, 'followToggleonFollowIconClick');
    this.setState({followToggle: !this.state.followToggle})

  }

  async componentDidMount() {
    const user = await userService.getById(this.props.match.params.id)
    this.setState({ user })
    this.props.loadJams()
  }

  onJamClick = (jamId) => {
    this.props.history.push(`../jam/${jamId}`)
  }

  findSelectedJams = () => {
    return this.props.jams.filter(jam => {
      return jam.usersGoing.find(userGoing => {
        return userGoing._id === this.state.user._id
      })

    })
  }

  render() {
    const { user } = this.state
    const { jams } = this.props
    const { followToggle } = this.state
    // if (!user) return <div>Loding..</div>
    if (jams.length === 0 || !user) return <h2>Loading...</h2>
    return (
      <>
        <section className="user-box flex">
          <UserInfo 
            user={user} 
            followToggle={followToggle} 
            onFollowIconClick={this.onFollowIconClick}
          />
          <UserTalents user={user}/>
        </section>
        <section className="user-jams-list">
              <h1>Jams Attending</h1>
              <div>
                <JamScroll jams={this.findSelectedJams()} onJamClick={this.onJamClick}/>
              </div>
        </section>
      </>
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