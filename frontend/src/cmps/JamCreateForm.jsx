import React, { Component } from "react";

export class JamCreateForm extends Component {
    state = {
        jam: {
            title: "",
            description: "",
            imgUrl: "http://some-img",
            capacity: 1,
            location: {
                region: "",
                city: "",
                address: "",
                lat: null,
                lng: null,
            },
            createdBy: {},
            startsAt: null,
            tags: [],
            createdAt: null,
            usersGoing: [],
        },
        time: []
    };

    handleTime = (ev) => {
        if (ev.target.name === 'date') this.state.time.splice(0, 1, ev.target.value)
        if (ev.target.name === 'time') this.state.time.splice(1, 1, ev.target.value)
        const parsedTime = Date.parse(...this.state.time)
        const jamCopy = { ...this.state.jam };
        jamCopy.startsAt = parsedTime
        this.setState({jam: jamCopy})
    }

    handleChange = (ev) => {
        const jamCopy = { ...this.state.jam };
        jamCopy[ev.target.name] = ev.target.value;
        this.setState({ jam: jamCopy }, () => {
            this.props.changeForm(this.state.jam);
        });
    };

    handleLocation = (ev) => {
        const jamCopy = { ...this.state.jam };
        const jamLocation = { ...this.state.jam.location };
        jamLocation[ev.target.name] = ev.target.value;
        jamCopy.location = jamLocation
        this.setState({ jam: jamCopy }, () => {
            this.props.changeForm(this.state.jam);
        });
    };

    onSubmit = (ev)=> {
        ev.preventDefault()
        this.props.onSubmitForm()
    }

    render() {
        const { jam } = this.state;
        return (
            <div className="create-form-container">
                <h1>Create New Jam</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="item">
                        <p>Jam Title</p>
                        <div className="name-item">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                onChange={this.handleChange}
                                value={jam.title}
                            />
                        </div>
                    </div>
                    <div className="item">
                        <p>Description</p>
                        <textarea onChange={this.handleChange} name="description"
                            value={jam.description} rows="3"></textarea>
                    </div>
                    <div className="item">
                        <p>Capacity</p>
                        <input
                            type="number"
                            name="capacity"
                            min="1"
                            max="100"
                            onChange={this.handleChange}
                            value={jam.capacity}
                        />
                    </div>
                    <div className="item">
                        <p>Jam Address</p>
                        <input
                            type="text"
                            name="address"
                            placeholder="Street address"
                            onChange={this.handleLocation}
                            value={jam.location.address}
                        />
                        <div className="city-item">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                onChange={this.handleLocation}
                                value={jam.location.city}
                            />
                            <select
                                name="region"
                                onChange={this.handleLocation}
                                value={jam.location.region}
                            >
                                <option value="">Region</option>
                                <option value="North">North</option>
                                <option value="Center">Center</option>
                                <option value="South">South</option>
                            </select>
                        </div>
                    </div>
                    <div className="item">
                        <p>Date</p>
                        <input type="date" name="date" onChange={this.handleTime}/>
                        <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div className="item">
                        <p>Time</p>
                        <input type="time" name="time" onChange={this.handleTime} />
                        <i className="fas fa-clock"></i>
                    </div>
                    
                <button className="form-submit-btn">SAVE</button>
                </form>
            </div>
        );
    }
}
