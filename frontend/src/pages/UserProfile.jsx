import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userService } from '../services/userService'
import { loadUsers } from '../store/actions/userActions'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
class _UserProfile extends Component {

  state = {
    user: null,
    currUser: false
  }

  // async componentDidMount() {
  //   const user = await userService.getById(this.props.match.params.id)
  //   this.setState({user})
  // }

  componentDidMount() {
    const user = userService.getById(this.props.match.params.id)
    // console.log('userDits cmp didM', user);
    this.setState({ user })
    // this.props.loadUsers()
  }

  render() {

    const { user } = this.state
    if (!user) return <div>Loding..</div>
    return (
      <section >
        <div className="user-box">
        <div className="user-basic-info">
          <div className="user-img">
            <img src={user.imgUrl} />
          </div>

          <div className="user-tags-name">
            <p>{user.username}</p>
            <LocationOnRoundedIcon />
            <p>{user.location.city}</p>
            <ul>{user.tags.map((tag, idx) => {
              return <li key={idx}>{tag}</li>
            })}</ul>
          </div>

        </div>
        <div className="user-about">
          <p>{user.about}</p>
          <ChatRoundedIcon />
          <FavoriteBorderRoundedIcon />
        </div>

        <div className="user-talents">
          <ul>{user.talents.map((talent, idx) => {
            return <li key={idx}>{talent}</li>
          })}</ul>
        </div>

        </div>

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


