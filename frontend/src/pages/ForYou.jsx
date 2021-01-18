import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userService } from '../services/userService'
import { loadUsers } from '../store/actions/userActions'
import { loadJams } from '../store/actions/jamActions'

class _ForYou extends Component {
    render() {
        return <h2>FOR YOU!</h2>
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
  
  export const ForYou = connect(mapStateToProps, mapDispatchToProps)(_ForYou)