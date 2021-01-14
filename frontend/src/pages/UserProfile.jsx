import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userService } from '../services/userService'
import { loadUsers } from '../store/actions/userActions'

class _UserProfile extends Component {

  state = {
    user : null,
    currUser: false 
  }

  // async componentDidMount() {
  //   const user = await userService.getById(this.props.match.params.id)
  //   this.setState({user})
  // }

  componentDidMount() {
    const user = userService.getById(this.props.match.params.id)
    console.log('userDits cmp didM',user );
    this.setState({user})
    // this.props.loadUsers()
  }

  render() {
    
    const {user} = this.state
    if(!user) return <div>Loding..</div>
    return (
      <section className="user-details">
        <h1>User Details</h1>
        <img src={user.imgUrl}/>
        <p>{user.username}</p>
        <p>{user.location.city}</p>
        <p>{user.tags}</p>
        <p>{user.about}</p>
        <ul>{user.talents.map((talent, idx) => {
                    return <li key={idx}>{talent}</li>
                })}</ul>
        

      </section>
    )
  }
}


const mapStateToProps = state => {
  return {
    // jams: state.jamModule.jams,
    users: state.userModule.users,
    // loggedInUser: state.userModule.loggedInUser
  }
}
const mapDispatchToProps = {
  // loadJams,
  loadUsers,
}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)


