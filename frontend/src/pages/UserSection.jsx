import React, { Component } from "react";
import { connect } from "react-redux";
import { loadUsers } from "../store/actions/userActions";
import { loadJams } from "../store/actions/jamActions";
import { UserInfo } from "../cmps/UserProfile/UserInfo";
import { UserTalents } from "../cmps/UserProfile/UserTalents";
import { JamList } from "../cmps/JamList";
import { UserList } from "../cmps/UserList";

class _UserSection extends Component {

    state = {
        activeTab : 'events'
    }

    componentDidMount() {
        this.props.loadJams()
        this.props.loadUsers()
    }

    onTabChoose = (tab)=> {
        this.setState({activeTab: tab})
    }

    filterJamsByInst = () => {
        return this.props.jams.filter((jam) => {
            const user = jam.usersGoing.find((user) => {
                return user.playing.some((inst) => {
                    return inst === this.props.loggedInUser.talents[0];
                });
            });
            if (!user) return jam;
        });
    };

    filterMembersByFollow = () => {
        return this.props.users.filter((user) => {
            return user.followers.find(
                (user) => user._id === this.props.loggedInUser._id
            );
        });
    };

    filterJamsByRegion = () => {
        return this.props.jams.filter((jam) => {
            return (
                jam.location.region === this.props.loggedInUser.location.region
            );
        });
    };

    render() {
        const { jams, loggedInUser } = this.props
        const { activeTab } = this.state
        if (jams.length === 0 ) return <h2>loading...</h2>
        return (<>
            
            <main className="main-content user-section flex">
                <div className="user-details-aside flex column">
                    <UserInfo user={loggedInUser} isUserAdmin={true} />
                    <UserTalents user={loggedInUser} isUserAdmin={true} />
                    <button>Start A New Jam</button>
                </div>
                <div className="filtered-jams section">
                    <div className="user-section-toolbar">
                        <ul className="toolbar-left">
                            <li onClick={()=>this.onTabChoose('events')} className={activeTab === 'events' ? 'active' : ''}>Explore Jams</li>
                            <li onClick={()=>this.onTabChoose('members')} className={activeTab === 'members' ? 'active' : ''}>Members</li>
                            <li onClick={()=>this.onTabChoose('manage')} className={activeTab === 'manage' ? 'active' : ''}>Manage Your Jams</li>
                        </ul>
                        
                        
                    </div>
                   {activeTab === 'events' && <div>
                        <h1>Jams Without {loggedInUser.talents[0]}</h1>
                        <JamList jams={this.filterJamsByInst()} />
                        <h1>Jams Around {loggedInUser.location.region} Region</h1>
                        <JamList jams={this.filterJamsByRegion()} />
                    </div>}
                    {activeTab === 'members' && <div>
                        <h1>Members You Follow</h1>
                        <UserList users={this.filterMembersByFollow()}/>
                    </div>}
                </div>
          </main>
        </>)
    }
}
const mapStateToProps = (state) => {
    return {
        jams: state.jamModule.jams,
        users: state.userModule.users,
        loggedInUser: state.userModule.loggedInUser,
    };
};
const mapDispatchToProps = {
    loadJams,
    loadUsers,
};

export const UserSection = connect(mapStateToProps, mapDispatchToProps)(_UserSection);