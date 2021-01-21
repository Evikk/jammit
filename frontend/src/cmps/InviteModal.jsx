import ReactModal from 'react-modal';
import React from 'react';
import { FriendsInvitePreview } from './InviteFriends'


export  class InviteModal extends React.Component {

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
        this.setState({
            showModal: false


        });
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
        console.log(this.state.invited);
    }
    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '550px',
                height: '450px'
                
             

            }
        };
        return (
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="invite-modal"
                    style={customStyles}
                    closeOnEsc={true}
                    ariaHideApp={false}
                >
                    <button className="esc-btn-modal" onClick={this.handleCloseModal}>X</button>
                    <div className="invite-modal-title">
                    <h2>Invite Your Friends!</h2>
                    </div>
                    {/* <input type="checkbox" name="select-all-box" id="select-all-box"></input>
                    <label for="select-all-box">Select All</label> */}
                    <button className="select-all-btn" onClick={() => this.selectAll()}>Select All</button>
                    <div className="following-friends-list">
                   
                    <ul className="following-list-con">
                        {this.state.following && this.state.following.map(function (user, index) {
                            return <FriendsInvitePreview handleChange={this.handleChange.bind(this)}  key={index} user={user} />
                        }.bind(this))}

                    </ul>
                    </div>
                    <button className="send-invites-btn" onClick={() => this.sendInvites()} >Send Invites</button>
                </ReactModal>
    
        );
    }
}
