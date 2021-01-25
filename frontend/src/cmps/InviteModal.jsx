import { connect } from 'react-redux'
import ReactModal from 'react-modal';
import React from 'react';
import { FriendsInvitePreview } from './InviteFriends'
import { socketService } from '../services/socketService'

class _InviteModal extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false,
            selectAll: false,
            following: [],
            invited: []
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({
            showModal: true
        });
    }

    handleCloseModal() {
        this.props.handleCloseModal()

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.showModal!==this.state.showModal){
          this.setState({showModal: nextProps.showModal });
        }
        if(nextProps.following!==this.state.following){
            this.setState({following: nextProps.following.map((following) => {
                return {...following,  isChecked: false};
            })})
          }
      }
    componentDidMount() {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27) this.handleCloseModal();
        });
    }


    handleChange(user, invited) {
        if (invited) {
            let joined = this.state.invited.concat(user)
            this.setState({invited: joined})
        } else {
            let removed = this.state.invited.filter( (userInvited)=> userInvited._id !== user._id)
            this.setState({invited: removed})
        }
    }

    selectAll () {
        this.setState( {following: this.state.following.map((following) => {
            return {...following, isChecked: true};
        }), invited: this.state.following.slice()});
    }
    sendInvites() {
        const link = `jam/${this.props.jamId}`
        const name = this.props.loggedInUser.username
        const msg = `has invited you to ${this.props.jamTitle}!!!`

        this.state.invited.forEach(user=>{
            console.log(user._id);
            socketService.emit('user connection', user._id);
            socketService.emit('invite', { msg, link, name })
            socketService.emit('user connection', this.props.loggedInUser._id);
        })
        this.handleCloseModal()
    }
    
    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                padding: '0',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '370px',
                background: '#efefef'
            },
            
            overlay: {zIndex: 99}
        };
        return (
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="invite-modal"
                    style={customStyles}
                    closeOnEsc={true}
                    ariaHideApp={false}
                >
                <div className="align-center">
                    <div className="invite-modal-title flex">
                        <h2>Invite Your Friends!</h2>
                        <button className="esc-btn-modal" onClick={this.handleCloseModal}>&times;</button>
                    </div>
                    <div className="align-end">
                        <button className="select-all-btn" onClick={() => this.selectAll()}>Select All</button>
                    </div>
                    {/* <input type="checkbox" name="select-all-box" id="select-all-box"></input>
                    <label for="select-all-box">Select All</label> */}
                    <div className="following-friends-list">
                   
                    <ul className="following-list-con">
                        {this.state.following && this.state.following.map(function (user, index) {
                            return <FriendsInvitePreview handleChange={this.handleChange.bind(this)}  key={index} user={user} />
                        }.bind(this))}

                    </ul>
                    </div>
                    <div className="mgb20">
                        <button className="send-invites-btn" onClick={() => this.sendInvites()} >Send Invites</button>
                    </div>
                </div>
                </ReactModal>
    
        );
    }
}
const mapStateToProps = state => {
    return {
      loggedInUser: state.userModule.loggedInUser
    }
  }
  const mapDispatchToProps = {
  }
  
  export const InviteModal = connect(mapStateToProps, mapDispatchToProps)(_InviteModal)
