import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userService } from '../services/userService'
import { loadUsers } from '../store/actions/userActions'
import { loadJams } from '../store/actions/jamActions'
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { JamPreview } from '../cmps/JamPreview'
import { JamScroll } from '../cmps/JamScroll'

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
    this.props.loadJams()
  }

  onJamClick = (jamId)=> {
    this.props.history.push(`../jam/${jamId}`)
  }
  
  findSelectedJams =()=> {
   return this.props.jams.filter(jam =>{
      return jam.usersGoing.find(userGoing => {
        return userGoing._id === this.state.user._id
      })
      
    })
  }

  render() {
    const { user } = this.state
    const {jams} = this.props
    // if (!user) return <div>Loding..</div>
    if (jams.length === 0 || !user) return <h2>Loading...</h2>
    return (
      <>
        <section className="user-box flex justify-center">

          <div className="user-left-box flex column">

            <div className="user-basic-info flex">

              <div className="user-img">
                <img src={user.imgUrl} />
              </div>

              <div className="user-tags-name flex column justify-center">
                <span className="user-stage-name fs30">{user.username}</span>
                <br />
                <div className="user-location">
                  <LocationOnOutlinedIcon className="location-icon" />
                  <span>{user.location.city}</span>
                </div>
                <ul >{user.tags.map((tag, idx) => {
                  return <li className="tags fs12" key={idx}>{tag}</li>
                })}</ul>
              </div>

            </div>

            <div className="user-about">
              <span>{user.about}</span>
            </div>
            
            {/* <div className="followers">
              {user.followers.map((follower, idx) => {
                return <img className="follower-avatar" src={follower.imgUrl} key={idx} />
              })}
            </div> */}

            <div className="reaction-icon">
              <ChatRoundedIcon />
              <FavoriteBorderRoundedIcon />
            </div>

          </div>

          <div className="user-right-box flex column">
            <div className="top-card">
            <div className="titel flex">
              <span className="talents-title fs18">Talents</span>
            </div>
            <div className="user-talents">
              <ul className="flex column">{user.talents.map((talent, idx) => {
                return <li key={idx}>{talent}</li>
              })}</ul>
            </div>
            </div>
            {/* <div className="bottom-card"> */}
               <div className="followers bottom-card">
              {user.followers.map((follower, idx) => {
                return <img className="follower-avatar" src={follower.imgUrl} key={idx} />
              })}
            </div>
            {/* </div> */}

          </div>
        </section>

        <section className="user-jams-list">
              <h1>Jams Attending</h1>
              <div>
                <JamScroll jams={this.findSelectedJams()} onJamClick={this.onJamClick}/>
              </div>
        </section>
      </>

    )
  }
}


const mapStateToProps = state => {
  return {
    jams: state.jamModule.jams,
    users: state.userModule.users,
    // loggedInUser: state.userModule.loggedInUser
  }
}
const mapDispatchToProps = {
  loadJams,
  loadUsers,
}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)


