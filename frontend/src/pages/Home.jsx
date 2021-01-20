import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadJams } from '../store/actions/jamActions.js'
import { loadUsers, login } from '../store/actions/userActions.js'
import { UserList } from '../cmps/UserList.jsx'
import { JamScroll } from '../cmps/JamScroll.jsx'
import { HeroSection } from '../cmps/HeroSection.jsx'
import Loader from 'react-loader-spinner'

class _Home extends Component {
  state = {
    upcomingJams: []
  }
  componentDidMount() {
    this.props.loadJams()
    this.props.loadUsers()
    this.getUpcomingJams()
  }

  getUpcomingJams = ()=> {
    const upcomingJams = this.props.jams.filter(jam => {
      const weekFromNow = new Date().getTime()+86400000*7
      return jam.startsAt > Date.now() && jam.startsAt < weekFromNow
    })
    this.setState({upcomingJams})
  }

  render() {
    const { jams, users, loggedInUser } = this.props
    const { upcomingJams } = this.state
    if (jams.length === 0 || users.length === 0) 
      return  <div className="loader main-content pos-relative">
                <Loader type="Bars" color="#00475F" height={200} width={200} timeout={5000} />
              </div>
    return ( 
      <div className="home">
        <HeroSection/>
        <main className="main-content zebra-container flex column space-between">
          <div className="jams section">
              <h1>Most Popular Jams</h1>
              <JamScroll jams={jams} />
          </div>
          <div className="jams section">
              <h1>Upcoming This Week</h1>
              <JamScroll jams={upcomingJams} />
          </div>
          <div className="jams section">
              <h1>Jams</h1>
              <JamScroll jams={upcomingJams} />
          </div>

          <div className="members-container section">
            <div className="members-list-preview">
              <h1>Featured Members</h1>
              <UserList users={users.filter((user,idx)=>{
                if (idx < 4) return user // user.slice
                })}/>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jams: state.jamModule.jams,
    users: state.userModule.users,
    loggedInUser: state.userModule.loggedInUser
  }
}
const mapDispatchToProps = {
  loadJams,
  loadUsers,
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)
