import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserList } from '../cmps/UserList'
import { loadUsers } from '../store/actions/userActions'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Loader from 'react-loader-spinner';

class _MembersList extends Component {

    state = {
        filterBy: {
            username: '',
            fullname: ''
        }
    }

    componentDidMount() {
        this.props.loadUsers()
    }

    // handleChange = (ev) => {
    //     const filterBy = { ...this.state.filterBy };
    //     filterBy[ev.target.name] = ev.target.value;
    //     this.setState({ filterBy }, ()=> {
    //         this.props.loadUsers(this.state.filterBy)
    //     });
    // };
    onHandleInputChange = ({ target }) => {
        const field = target.name
        // let value = (target.type === 'number') ? +target.value : target.value

        this.setState(prevState => {
            return {
                ...prevState,
                filterBy: {
                    ...prevState.filterBy,
                    [field]: target.value
                }
            }
        }, () => {
            const { filterBy } = this.state
            this.props.loadUsers(filterBy)
        })
    }



    onSetFilter = (ev) => {
        ev.preventDefault();
        // const { filterBy } = this.state
        this.props.loadUsers(this.state.filterBy)
    }

    render() {
        const { users } = this.props
        const { username, fullname } = this.state.filterBy
        if (!users) {
            return <div className="loader main-content pos-relative">
                <Loader type="Bars" color="#00475F" height={200} width={200} timeout={5000} />
            </div>
        }
        return (
            <section>
                <div className="search-area">
                <div className="search-title">
                        <h1 className="staatliches align-center">Member Search</h1>
                    </div>
                <div className="jam-filter-container flex justify-center">
                    <div className="title-search">
                        <SearchRoundedIcon className="search-icon" />
                        <form onSubmit={this.onSetFilter}>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={this.onHandleInputChange} 
                        />
                        </form>
                    </div>
                </div>
                </div>
                <div className="members-container">
                    <UserList users={users} />
                </div>
                {/* <div className="input-box">
                        <SearchRoundedIcon className="search-icon" />
                        <form onSubmit={this.onSetFilter}>
                            <input name="username"
                                type="text"
                                id="username"
                                className="fs18"
                                placeholder="Looking for someone?"
                                value={username}
                                onChange={this.onHandleInputChange} />
                        </form>
                    </div> */}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        //   jams: state.jamModule.jams,
        users: state.userModule.users,
        filterBy: state.userModule.filterBy
        // loggedInUser: state.userModule.loggedInUser
    }
}
const mapDispatchToProps = {
    // loadJams,
    loadUsers,
}

export const MembersList = connect(mapStateToProps, mapDispatchToProps)(_MembersList)
