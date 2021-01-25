import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadJams } from '../store/actions/jamActions.js'
import { loadUsers } from '../store/actions/userActions.js'
import { UserList } from '../cmps/UserList.jsx'
import { JamScroll } from '../cmps/JamScroll.jsx'
import { HeroSection } from '../cmps/HeroSection.jsx'
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom'
// import { JamList } from '../cmps/JamList.jsx'
import recordlogo from "../assets/img/recordlogo.png"

class _Home extends Component {
  state = {}

  componentDidMount() {
    this.props.loadJams()
    this.props.loadUsers()
  }

  getUpcomingJams = ()=> {
    return this.props.jams.filter(jam => {
      const weekFromNow = new Date().getTime()+86400000*7
      return jam.startsAt > Date.now() && jam.startsAt < weekFromNow
    })
  }

  getPopularJams = () => {
    return this.props.jams.filter(jam => {
      // const slotsLeft = jam.capacity - jam.usersGoing.length
      const weekAgo = new Date().getTime()-86400000*7
      return jam.createdAt < Date.now() && jam.createdAt > weekAgo
    })
  }

  getFeaturedMembers = ()=> {
    return this.props.users.slice(0,6)
  }

  render() {
    const { jams, users } = this.props
    if (jams.length === 0 || users.length === 0) 
      return  <div className="loader main-content pos-relative">
                <Loader type="Bars" color="#00475F" height={200} width={200} timeout={5000} />
              </div>
    return ( 
      <div className="home">
        <HeroSection/>
        <main className="main-content zebra-container flex column space-between">
          <div className="jams section">
              <div className="title-row">
                <h1 className="staatliches">Added Recently &gt;&gt;&gt;</h1>
                <Link to="/search">Explore</Link>
              </div>
              <div className="carousel-container">
                <JamScroll jams={this.getPopularJams()} />
              </div>
          </div>
          <div className="jams section">
          <div className="title-row">
                <h1 className="staatliches">Upcoming This Week &gt;&gt;&gt;</h1>
                <Link to="/search">Explore</Link>
              </div>
              <div className="carousel-container">
              <JamScroll jams={this.getUpcomingJams()} />
              </div>
          </div>

          <div className="members-container section">
            <div className="title-row">
                <h1 className="staatliches"> Featured Members &gt;&gt;&gt;</h1>
                <Link to="/members">See All</Link>
            </div>
            <div className="carousel-container">
            <UserList users={this.getFeaturedMembers()}/>
            </div>
          </div>
        </main>
        <footer className="flex column align-center">
          <img className="footer-logo" src={recordlogo} alt="footer-logo"/>
          <small>All RIGHT RESERVED TO JAMEET 2021&copy;</small>
        </footer>
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
  // sendMsg
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)
