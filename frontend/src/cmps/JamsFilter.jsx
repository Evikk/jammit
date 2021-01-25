import React, { Component } from 'react'
import { loadJams } from "../store/actions/jamActions.js"
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class _JamsFilter extends Component {
    state={
        filterBy: {
            title: '',
            region: '',
            tags: []
        },
        tags: null,
    }

    componentDidMount() {
        this.props.loadJams()
        this.setState({ tags: this.props.tags })
        this.props.filterJams(this.props.jams)
    }

    componentDidUpdate() {
        // this.props.filterJams(this.props.jams)
        // this.props.loadJams()
    }

    onTagChoose = (tag,idx)=> {
        const filterBy = { ...this.state.filterBy };
        const tags =  this.state.tags
        tags.splice(idx,1)
        filterBy.tags.push(tag)
        this.setState({filterBy, tags}, ()=> {
            this.props.filterJams(this.state.filterBy)
            this.getNotification()
        })
        
    }

    getNotification = ()=> {
        var msg
        if (this.state.filterBy.tags.length === 0) msg = `Showing all jams`
        else msg = `Filtering jams by ${this.state.filterBy.tags}`
        toast(msg, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            });
    }

    onTagUnChoose = (tag,idx)=> {
        const filterBy = { ...this.state.filterBy };
        const tags =  this.state.tags
        filterBy.tags.splice(idx,1)
        tags.push(tag)
        this.setState({filterBy, tags}, ()=>{
            this.props.filterJams(this.state.filterBy)
            this.getNotification()
        })
    }

    getTags =()=> {
        if (this.state.tags){
            const tags = this.state.tags.map((tag,idx)=> {
                return <li className="cursor-pointer filter-tags" key={idx} value={tag} onClick={()=>this.onTagChoose(tag,idx)}>{tag}</li>
            })
            return tags.slice(0,6)
        }
        return
    }

    getTagsChoosed = ()=> {
        if (this.state.filterBy.tags){
        return this.state.filterBy.tags.map((tag,idx)=> {
            return <li className="cursor-pointer filter-tags choosed" key={idx} value={tag} onClick={()=>this.onTagUnChoose(tag,idx)}>{tag}</li>
        })}
        return
    }
    render() {
        return (
        <div className="filter-container">
            <div className="flex justify-center">
                <ul className="jam-card-tags flex filter-tags options">
                    {this.getTags()}
                </ul>
            </div>
            <div className="jams-list-container">
                <ul className="jam-card-tags flex filter-tags">
                    {this.getTagsChoosed()}
                </ul>       
            </div>
            <ToastContainer />
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        jams: state.jamModule.jams,
        tags: state.jamModule.tags
    }
}
const mapDispatchToProps = {
    loadJams,
}

export const JamsFilter = connect(mapStateToProps, mapDispatchToProps)(_JamsFilter)