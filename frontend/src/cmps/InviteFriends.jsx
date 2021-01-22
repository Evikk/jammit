import { withRouter } from "react-router-dom";
import React from 'react';


 class _FriendsInvitePreview extends React.Component {
    
    state =  {
        user: this.props.user
    }

   
    componentWillReceiveProps(nextProps){
       if(nextProps.user!==this.props.user){
          this.setState({user: nextProps.user });
    
        }
      }
    handleChange (e)  {
        this.props.handleChange(this.state.user , e.target.checked);
        this.setState({ user: {...this.state.user, isChecked:e.target.checked} });
    }

    render () {
        return (
            <li >
                <div className="jammers invite-list">
                    <div>
                        <img className="invite-list-img" onClick={() => this.props.history.push(`/user/${this.state.user._id}`)} src={this.state.user.imgUrl} alt="" />
                        <h3 className="invite-list-name">{this.state.user.fullname}</h3>
                    </div>
                    <input type="checkbox" onChange={this.handleChange.bind(this)} checked={this.state.user.isChecked} ></input>
                    {/* <div>
                        {user.playing.map(function (instrument, index) {
                            return <span key={index} className="instrument-title"> {instrument}</span>
                        })}
                    </div> */}
                </div>
    
            </li>
        );
    }
    
}

export const FriendsInvitePreview = withRouter (_FriendsInvitePreview);