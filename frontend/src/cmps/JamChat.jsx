import React, { Component } from 'react'
import { connect } from 'react-redux'
import { socketService } from '../services/socketService'
import { sendMsg } from '../store/actions/jamActions'


class _JamChat extends Component {
  state = {
    msg: { txt: '' },
    msgs: []
  }

  componentDidMount() {
    this.setState({msgs: this.props.msgs })
    socketService.setup()
    socketService.emit('jam id', this.props.jamId)
    socketService.on('chat addMsg', this.addMsg)
  }

  componentWillUnmount() {
    socketService.off('chat addMsg', this.addMsg)
    socketService.terminate()
    clearTimeout(this.timeout)
  }

  addMsg = newMsg => {
      this.props.sendMsg(newMsg, this.props.jam)
  }

  sendMsg = ev => {
    ev.preventDefault()
    const from = this.props.loggedInUser.username || 'Me'
    socketService.emit('chat newMsg', { from, txt: this.state.msg.txt })
    this.setState({ msg: { from: 'Me', txt: '' } })
  }

  msgHandleChange = ev => {
    const { name, value } = ev.target
    this.setState(prevState => {
      return {
        msg: {
          ...prevState.msg,
          [name]: value
        }
      }
    })
  }

  render() {
    return (
      <div className="chat-container">
        <ul className="chat-msgs">
        {this.state.msgs.map((msg, idx) => (
            <li key={idx} className={(idx % 2) ? 'bgc-gray' : 'bgc-white'}>
              <p className="sender-name">{msg.from}<span className={(idx < 1) ? 'offline' : 'online'}>•</span></p>
              <p className="msg-text">{msg.txt}</p>
            </li>
          ))}

          
        </ul>
        {/* <ul className="chat-msgs">
          {this.state.msgs.map((msg, idx) => (
            <li key={idx}><span>{msg.from}:</span> <span className="msg-text">{msg.txt}</span></li>
          ))}
          
        </ul> */}
       

        <form onSubmit={this.sendMsg}>
          <input
            type="text"
            value={this.state.msg.txt}
            onChange={this.msgHandleChange}
            name="txt"
            placeholder="Write a comment..."
            autoComplete="off"
          />
          <button>Send</button>
        </form>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.userModule.loggedInUser
  }
}
const mapDispatchToProps = {
    sendMsg
}

export const JamChat = connect(mapStateToProps, mapDispatchToProps)(_JamChat)
