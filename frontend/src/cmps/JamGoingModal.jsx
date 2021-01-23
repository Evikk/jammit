// import { useHistory } from "react-router-dom";
// import { jamService } from '../services/jamService'
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
import ReactModal from 'react-modal';
import React from 'react';
import { JamUserPreview } from './JamUserPreview'


export default class JamGoingListModal extends React.Component {

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
        transform: 'translate(-50%, -50%)',
        display: 'grid',
        height: '70%',
        width: '70%'
      }
    };
    return (
      <div>
        <button className="see-all-btn" onClick={this.handleOpenModal}>See All</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="jammers-going-list"
          style={customStyles}
          closeOnEsc={true}
          ariaHideApp={false}
        >
          <button className="esc-btn-modal" onClick={this.handleCloseModal}>X</button>
          <ul className="users-going-con">
            {this.props.usersGoing.map(function (user, index) {
              return <JamUserPreview key={index} user={user} />
            })}

          </ul>

        </ReactModal>
      </div>
    );
  }
}


/*More features*/


// onAfterOpen={
//                 handleAfterOpenFunc
//   /* Function that will be run after the modal has opened. */}

// onAfterClose={
//                 handleAfterCloseFunc
//   /* Function that will be run after the modal has closed. */}

// onRequestClose={
//                 handleRequestCloseFunc
//   /* Function that will be run when the modal is requested
//      to be closed (either by clicking on overlay or pressing ESC).
//      Note: It is not called if isOpen is changed by other means. */}

// shouldCloseOnEsc={
//                 true
//   /* Boolean indicating if pressing the esc key should close the modal
//      Note: By disabling the esc key from closing the modal
//      you may introduce an accessibility issue. */}