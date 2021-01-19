import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadJams } from '../store/actions/jamActions.js'
import { loadUsers } from '../store/actions/userActions.js'
import { UserList } from '../cmps/UserList.jsx'
import { JamScroll } from '../cmps/JamScroll.jsx'
import { HeroSection } from '../cmps/HeroSection.jsx'

class _Home extends Component {
  state = {
    
  }
  componentDidMount() {
    this.props.loadJams()
    this.props.loadUsers()
  }
  

  render() {
    const { jams, users, loggedInUser } = this.props
    if (jams.length === 0 || users.length === 0) return <h2>Loading...</h2>
    return ( 
      <div className="home">
        <HeroSection/>
        <main className="main-content flex column space-between">
          <div className="jams section">
              <h1>Most Popular Jams</h1>
              <JamScroll jams={jams} />
          </div>
          <div className="jams section">
              <h1>Upcoming Jams</h1>
              <JamScroll jams={jams} />
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
