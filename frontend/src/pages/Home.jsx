import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadJams } from '../store/actions/jamActions.js'
import { loadUsers } from '../store/actions/userActions.js'
import { UserList } from '../cmps/UserList.jsx'
import { JamScroll } from '../cmps/JamScroll.jsx'

class _Home extends Component {
  state = {
    
  }
  componentDidMount() {
    this.props.loadJams()
    this.props.loadUsers()
  }
  onJamClick = (jamId)=> {
    this.props.history.push(`jam/${jamId}`)
  }

  filterMembersByFollow = () =>{
    return this.props.users.filter(user=> {
      return user.followers.find(user=> user._id === this.props.loggedInUser._id)
    })
  }

  filterJamsByInst = ()=> {
    return this.props.jams.filter(jam=>{
      const user = jam.usersGoing.find(user=> {
        return user.playing.some(inst=>{
          return inst === this.props.loggedInUser.talents[0]
        })
      })
      if (!user) return jam
    })
  }

  filterJamsByRegion = ()=> {
    return this.props.jams.filter(jam=>{
      return jam.location.region === this.props.loggedInUser.location.region
    })
  }

  render() {
    const { jams, users, loggedInUser } = this.props
    if (jams.length === 0 || users.length === 0) return <h2>Loading...</h2>
    return (
      
      <div className="home">
        <div className="hero-section">
          <div className="hero-content flex column">
            <h1 className="hero-title fs40">Make Music. Make Friends.</h1>
            <h3 className="hero-subtitle fs40">Search and explore the best jam sessions around!</h3>
            <div className="call-to-action">
              <button className="call-to-action-btn" onClick={()=>this.props.history.push('/search')}>Let's Find a Jam!</button>
            </div>
          </div>
        </div>
        <main className="flex space-between">
        
        {loggedInUser ? 
        <div className="user-filtered-container">
           <div className="inst-filtered section"><h1>Jams Without {loggedInUser.talents[0]}</h1>
            <JamScroll jams={this.filterJamsByInst()} onJamClick={this.onJamClick}/>
          </div>
          <div className="region-filtered section"><h1>Jams Around {loggedInUser.location.region} Region</h1>
            <JamScroll jams={this.filterJamsByRegion()} onJamClick={this.onJamClick}/>
          </div>
        </div>
          :
        <div className="user-filtered-container">
          <div className="jams section">
            <h1>Most Popular Jams</h1>
            <JamScroll jams={jams} onJamClick={this.onJamClick}/>
          </div>
          <div className="jams section">
            <h1>Recently Added Jams</h1>
            <JamScroll jams={jams} onJamClick={this.onJamClick}/>
          </div>
        </div>
        }
      {loggedInUser && loggedInUser.following.length > 0 ?
        <div className="members-container">
        <div className="members-list-preview">
        <h1>Members You Follow</h1>
          <UserList users={this.filterMembersByFollow()}/>
        </div>
      </div>
        :
        <div className="members-container">
          <div className="members-list-preview">
          <h1>Featured Members</h1>
            <UserList users={users}/>
          </div>
        </div>
      }
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
