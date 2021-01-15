import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadJams } from '../store/actions/jamActions.js'
import { loadUsers } from '../store/actions/userActions.js'
// import { JamList } from '../cmps/JamList.jsx'
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
    if (!jams) return <h2>Loading...</h2>
    return (
    
      <div className="home">
        <div className="hero-section">
          <div className="hero-content flex column">
            <h1 className="hero-title fs40">Find a Jam. Make Music</h1>
            <h3 className="hero-subtitle">Search and explore the best jam sessions around!</h3>
            <div className="call-to-action">
              <button className="call-to-action-btn" onClick={()=>this.props.history.push('/search')}>Let's Find a Jam!</button>
            </div>
          </div>
        </div>
        
        <JamScroll jams={jams} onJamClick={this.onJamClick}/>
        <UserList users={users}/>
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
