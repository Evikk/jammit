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
          padding: '0',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '370px',
          background: '#efefef'
      },
      overlay: {zIndex: 99}
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
          <div className="invite-modal-title flex">
              <h2>Members Going</h2>
              <button className="esc-btn-modal" onClick={this.handleCloseModal}>&times;</button>
          </div>
          <div className="modal-content-pd">
            <ul className="following-list-con">
              {this.props.usersGoing.map(function (user, index) {
                return <JamUserPreview key={index} user={user} />
              })}
            </ul>
          </div>

        </ReactModal>
      </div>
    );
  }
}

// render() {
//   const customStyles = {
//       content: {
//           top: '50%',
//           left: '50%',
//           right: 'auto',
//           bottom: 'auto',
//           padding: '0',
//           marginRight: '-50%',
//           transform: 'translate(-50%, -50%)',
//           width: '370px',
//           background: '#efefef'
//       },
      
//       overlay: {zIndex: 99}
//   };
//   return (
//           <ReactModal
//               isOpen={this.state.showModal}
//               contentLabel="invite-modal"
//               style={customStyles}
//               closeOnEsc={true}
//               ariaHideApp={false}
//           >
//           <div className="align-center">
//               <div className="invite-modal-title flex">
//                   <h2>Invite Your Friends!</h2>
//                   <button className="esc-btn-modal" onClick={this.handleCloseModal}>&times;</button>
//               </div>
//               <div className="align-end">
//                   <button className="select-all-btn" onClick={() => this.selectAll()}>Select All</button>
//               </div>
//               {/* <input type="checkbox" name="select-all-box" id="select-all-box"></input>
//               <label for="select-all-box">Select All</label> */}
//               <div className="following-friends-list">
             
//               <ul className="following-list-con">
//                   {this.state.following && this.state.following.map(function (user, index) {
//                       return <FriendsInvitePreview handleChange={this.handleChange.bind(this)}  key={index} user={user} />
//                   }.bind(this))}

//               </ul>
//               </div>
//               <div className="mgb20">
//                   <button className="send-invites-btn" onClick={() => this.sendInvites()} >Send Invites</button>
//               </div>
//           </div>
//           </ReactModal>

//   );
// }