import ReactModal from 'react-modal';
import React from 'react';
import { JamUserPreview } from './JamUserPreview'


export default class InviteModal extends React.Component {

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
                transform: 'translate(-50%, -50%)'
            }
        };
        return (
            <div>
                <button  onClick={this.handleOpenModal}>Invite</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="invite-modal"
                    style={customStyles}
                    closeOnEsc={true}
                    ariaHideApp={false}
                >
                    <button className="esc-btn-modal" onClick={this.handleCloseModal}>X</button>
                    <ul className="following-list-con">
                        {this.props.following.map(function (user, index) {
                            return <JamUserPreview key={index} user={user} />
                        })}

                    </ul>

                </ReactModal>
            </div>
        );
    }
}
