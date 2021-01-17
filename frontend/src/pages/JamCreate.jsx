import React, { Component } from 'react'
import { connect } from 'react-redux'
import { JamDetails } from './JamDetails'
import { JamCreateForm } from '../cmps/JamCreateForm'

class _JamCreate extends Component {
    state={
        jam: {
            title: "",
            description: "",
            imgUrl: "http://some-img",
            capacity: null,
            location: {
                region: "",
                city: "",
                address: "",
                lat: null,
                lng: null
            },
            createdBy: {},
            startsAt: null,
            tags: [],
            createdAt: null,
            usersGoing: []
        },
        isSubmit: false
    }

    handleChange = (jam) => {
        this.setState({ jam });
    };

    handleSubmit = ()=> {
        this.setState({isSubmit: true}, ()=> {
            this.setState({isSubmit: false})
        })
    }

    jamSaved = ()=> {
        alert('Jam Saved!')
        this.props.history.push(`/user/${this.props.loggedInUser._id}`)
    }

    componentDidMount() {
    }

    render() {
        
        return <div className="create-container pos-relative">
                <JamCreateForm changeForm={this.handleChange} onSubmitForm={this.handleSubmit} />
                <JamDetails isEditMode={true} jam={this.state.jam} isSubmit={this.state.isSubmit} jamSaved={this.jamSaved}/>
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
  