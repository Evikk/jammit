import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadJams } from '../store/actions/jamActions.js'
import { loadUsers } from '../store/actions/userActions.js'
import { Link } from 'react-router-dom'
import { JamList } from '../cmps/JamList.jsx'
import { UserList } from '../cmps/UserList.jsx'

class _Home extends Component {
  state = {
    
  }
  componentDidMount() {
    this.props.loadJams()
    this.props.loadUsers()
  }

  render() {
    const { jams, users, loggedInUser } = this.props
    console.log(users, loggedInUser);
    if (!jams) return <h2>Loading...</h2>
    return (
      <div className="home">
        <JamList jams={jams}/>
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
