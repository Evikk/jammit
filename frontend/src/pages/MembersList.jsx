import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserList } from '../cmps/UserList'
import { loadUsers } from '../store/actions/userActions'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Loader from 'react-loader-spinner';

class _MembersList extends Component {

    componentDidMount() {
        this.props.loadUsers()
    }



    render() {
        const { users } = this.props
        if (!users) {
            return <div className="loader main-content pos-relative">
              <Loader type="Bars" color="#00475F" height={200} width={200} timeout={5000} />
           </div>}
        return (
            <section>
                <div className="search-area flex justify-center">
                    <div className="input-box">
                        <SearchRoundedIcon className="search-icon" />
                        <input type="text" className="fs18" placeholder="Looking for someone?" />
                    </div>
                </div>
                <div className="members-container">
                    <UserList users={users} />
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        //   jams: state.jamModule.jams,
        users: state.userModule.users,
        // loggedInUser: state.userModule.loggedInUser
    }
}
const mapDispatchToProps = {
    // loadJams,
    loadUsers,
}

export const MembersList = connect(mapStateToProps, mapDispatchToProps)(_MembersList)
