import ReactModal from 'react-modal';
import React from 'react';
import {_LoginSignup} from '../pages/LoginSignup'
 
export  class LoginModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false


    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true 
    });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false 
    
    
    });
  }
  
  render () {
      const customStyles = {
          content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
          }
        };
    return (
      <div>
        <button onClick={this.handleOpenModal}></button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="login-modal"
           style={customStyles}
           shouldCloseOnEsc={true}
           ariaHideApp={false}
           >
          <button onClick={this.handleCloseModal}>X</button>
        
          <_LoginSignup/>
        
         
        </ReactModal>
      </div>
    );
  }
}

