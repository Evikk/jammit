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
  render() {
    const { jams, users, loggedInUser } = this.props
    console.log(loggedInUser);
    
    if (jams.length === 0) return <h2>Loading...</h2>
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
            <JamScroll jams={jams.filter(jam=>{
                  const user = jam.usersGoing.find(user=> {
                    return user.playing.some(inst=>{
                      return inst === loggedInUser.talents[0]
                    })
                  })
                  if (!user) return jam
            })} onJamClick={this.onJamClick}/>
          </div>
          <div className="region-filtered section"><h1>Jams Around {loggedInUser.location.region} Region</h1>
            <JamScroll jams={jams.filter(jam=>{
                  return jam.location.region === loggedInUser.location.region
            })} onJamClick={this.onJamClick}/>
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
        
        <div className="members-container">
          <div className="members-list-preview">
          <h1>Featured Members</h1>
            <UserList users={users}/>
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
