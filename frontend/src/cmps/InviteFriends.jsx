import { withRouter } from "react-router-dom";
import React from 'react';


 class _FriendsInvitePreview extends React.Component {
    
    state =  {
        user: this.props.user,
        isChoosed: false
    }

   
    componentWillReceiveProps(nextProps){
       if(nextProps.user!==this.props.user){
          this.setState({user: nextProps.user });
    
        }
      }
    handleChange (e)  {
        this.props.handleChange(this.state.user , e.target.checked);
        this.setState({ user: {...this.state.user, isChecked:e.target.checked}, isChoosed:!this.state.isChoosed });
    }

    render () {
        return (
            <label htmlFor={this.props.key}>
                <li className={this.state.isChoosed ? 'choosed' : ''}>
                    <div className="jammers invite-list">
                        <div>
                            <input id={this.props.key} hidden type="checkbox" onChange={this.handleChange.bind(this)} checked={this.state.user.isChecked} ></input>
                            <span className="invite-list-name">{this.state.user.fullname}</span>
                        </div>
                        <img className="invite-list-img" src={this.state.user.imgUrl} alt="user" />
                    </div>
                </li>
            </label>
        );
    }
    
}

export const FriendsInvitePreview = withRouter (_FriendsInvitePreview);