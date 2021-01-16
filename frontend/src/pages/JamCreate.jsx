import React, { Component } from 'react'
import { connect } from 'react-redux'
import { JamDetails } from './JamDetails'
import { JamCreateForm } from '../cmps/JamCreateForm'

class _JamCreate extends Component {
    state={
        jam: {
            title: '',
            description: ''
        }
    }

    handleChange = (ev) => {
        const jamCopy = { ...this.state.jam };
        jamCopy[ev.target.name] = ev.target.value;
        this.setState({ jam: jamCopy });
    };


    componentDidMount() {
    }

    render() {
        
        return <div>
                <JamCreateForm onTitleChange={this.handleChange} onDescriptionChange={this.handleChange} />
                <JamDetails isEditMode={true} jam={this.state.jam}/>
            </div>
    }
}

const mapStateToProps = state => {
    return {
      jams: state.jamModule.jams,
      users: state.userModule.users,
      loggedInUser: state.userModule.loggedInUser
    }
  }
  const mapDispatchToProps = {
    
  }
  
  export const JamCreate = connect(mapStateToProps, mapDispatchToProps)(_JamCreate)
  