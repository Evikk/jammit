import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../store/actions/userActions'
import { loadJams } from "../store/actions/jamActions.js"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Loader from 'react-loader-spinner';
import { JamList } from '../cmps/JamList'

class _JamsList extends Component {
    
    state = {
        filterBy: {
            title: '',
            region: '',
            tags: []
        },
        region: ['North','Center','South'],
        tags: null,
    }

    componentDidMount() {
        this.props.loadJams()
        this.setState({ tags: this.props.tags })
    }

    handleChange = (ev) => {
        const filterBy = { ...this.state.filterBy };
        filterBy[ev.target.name] = ev.target.value;
        this.setState({ filterBy }, ()=> {
            this.props.loadJams(this.state.filterBy)
        });
    };

    getRegionOptions = ()=> {
        if (this.state.region) {
        return this.state.region.map((inst,idx) => {
            return <option key={idx} value={inst}>{inst}</option>
        })}
        return
    }

    onTagChoose = (tag,idx)=> {
        const filterBy = { ...this.state.filterBy };
        const tags =  this.state.tags
        tags.splice(idx,1)
        filterBy.tags.push(tag)
        this.setState({filterBy, tags}, ()=> {
            this.props.loadJams(this.state.filterBy)
        })
    }

    onTagUnChoose = (tag,idx)=> {
        const filterBy = { ...this.state.filterBy };
        const tags =  this.state.tags
        filterBy.tags.splice(idx,1)
        tags.push(tag)
        this.setState({filterBy, tags}, ()=>{
            this.props.loadJams(this.state.filterBy)
        })
    }

    getTags =()=> {
        if (this.state.tags){
            return this.state.tags.map((tag,idx)=> {
                return <li className="cursor-pointer" key={idx} value={tag} onClick={()=>this.onTagChoose(tag,idx)}>{tag}</li>
            })
        }
        return
    }

    getTagsChoosed = ()=> {
        if (this.state.filterBy.tags){
        return this.state.filterBy.tags.map((tag,idx)=> {
            return <li className="cursor-pointer" key={idx} value={tag} onClick={()=>this.onTagUnChoose(tag,idx)}>{tag}</li>
        })}
        return
    }

    render() {
        const { jams } = this.props
        
        
        if (!jams) {
            return <div className="loader main-content pos-relative">
              <Loader type="Bars" color="#00475F" height={200} width={200} timeout={5000} />
           </div>}
        return (
            <section className="main-content">
                <div className="jam-filter-container flex justify-center">
                    <div className="title-search">
                        <SearchRoundedIcon className="search-icon" />
                        <input
                            type="text" 
                            name="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <select name="region" onChange={this.handleChange}>
                        <option value="">Filter By Region</option>
                        {this.getRegionOptions()}
                    </select>
                </div>
                <div className="flex justify-center">
                    <ul className="jam-card-tags flex justify-center">
                        {this.getTags()}
                    </ul>
                </div>
                <div className="flex justify-center">
                </div>
                <div className="jams-list-container main-container">
                    <ul className="jam-card-tags flex ">
                        {this.getTagsChoosed()}
                    </ul>
                    <JamList jams={jams}/>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        jams: state.jamModule.jams,
        users: state.userModule.users,
        instruments: state.jamModule.instruments,
        tags: state.jamModule.tags
    }
}
const mapDispatchToProps = {
    loadJams,
    loadUsers,
}

export const JamsList = connect(mapStateToProps, mapDispatchToProps)(_JamsList)
