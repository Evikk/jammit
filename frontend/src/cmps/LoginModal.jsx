import ReactModal from 'react-modal';
import React from 'react';
import {LoginSignup} from '../pages/LoginSignup'
 
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
  componentWillReceiveProps(nextProps){
    if(nextProps.showModal!==this.state.showModal){
      this.setState({showModal: nextProps.showModal });
    }
  }

  componentDidMount(){
    document.addEventListener('keyup', (e) => {
        if (e.keyCode === 27) this.handleCloseModal();
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

       
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="login-modal"
           style={customStyles}
           shouldCloseOnEsc={true}
           ariaHideApp={false}
           >
          <button className="esc-btn-modal" onClick={this.handleCloseModal}>X</button>
          <LoginSignup history={this.props.history}/>
        </ReactModal>

    );
  }
}

