import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadJams } from '../store/actions/jamActions.js'
import { loadUsers } from '../store/actions/userActions.js'
import { UserList } from '../cmps/UserList.jsx'
import { JamScroll } from '../cmps/JamScroll.jsx'
import { HeroSection } from '../cmps/HeroSection.jsx'
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { JamList } from '../cmps/JamList.jsx'

class _Home extends Component {
  state = {}

  componentDidMount() {
    this.props.loadJams()
    this.props.loadUsers()
  }

  getPopularJams = ()=> {
    return this.props.jams.filter(jam => {
      const weekFromNow = new Date().getTime()+86400000*7
      return jam.startsAt > Date.now() && jam.startsAt < weekFromNow
    })
  }
  getUpcomingJams = () => {
    return this.props.jams.filter(jam => {
      const slotsLeft = jam.capacity - jam.usersGoing.length
      return slotsLeft < 10
    })
  }

  getFeaturedMembers = ()=> {
    return this.props.users.slice(0,3)
  }

  render() {
    const { jams, users } = this.props
    const { upcomingJams, popularJams } = this.state
    if (jams.length === 0 || users.length === 0) 
      return  <div className="loader main-content pos-relative">
                <Loader type="Bars" color="#00475F" height={200} width={200} timeout={5000} />
              </div>
              
    console.log(upcomingJams, popularJams);          
    return ( 
      <div className="home">
        <HeroSection/>
        <main className="main-content zebra-container flex column space-between">
          <div className="jams section">
              <div className="title-row">
                <h1>Most Popular Jams</h1>
                <Link to="/search">See All</Link>
              </div>
              <JamScroll jams={this.getPopularJams()} />
          </div>
          <div className="jams section">
          <div className="title-row">
                <h1>Upcoming This Week</h1>
                <Link to="/search">See All</Link>
              </div>
              <JamScroll jams={this.getUpcomingJams()} />
          </div>
          {/* <div className="jams section">
              <h1>Jams</h1>
              <JamList jams={jams} />
          </div> */}

          <div className="members-container section">
            <div className="members-list-preview">
              <h1>Featured Members</h1>
              <UserList users={this.getFeaturedMembers()}/>
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
