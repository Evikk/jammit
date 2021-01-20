import ReactModal from 'react-modal';
import React from 'react';
import { FriendsInvitePreview } from './InviteFriends'


export  class InviteModal extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false
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
      }
    componentDidMount() {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27) this.handleCloseModal();
        });
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
                width: '400px',
                height: '400px'
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
                    <h3>Invite your friends!</h3>
                    <input type="checkbox" name="select-all-box" id="select-all-box"></input>
                    <label for="select-all-box">Select All</label>
                    <ul className="following-list-con">
                        {this.props.following.map(function (user, index) {
                            return <FriendsInvitePreview key={index} user={user} />
                        })}

                    </ul>
                </ReactModal>
    
        );
    }
}
