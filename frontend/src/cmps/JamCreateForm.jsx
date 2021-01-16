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
                lng: null
            },
            createdBy: {},
            startsAt: null,
            tags: [],
            createdAt: null,
            usersGoing: []
    }
    }

    handleChange = (ev) => {
        const jamCopy = { ...this.state.jam };
        jamCopy[ev.target.name] = ev.target.value;
        this.setState({ jam: jamCopy }, ()=>{
            this.props.changeForm(this.state.jam)
        });

    }


    render() {
        const { jam } = this.state
        // console.log(jam);
        return (
                <div class="create-form-container">
                        <h1>Create New Jam</h1>
                    <form>
                        <div class="item">
                            <p>Jam Title</p>
                            <div class="name-item">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    onChange={this.handleChange}
                                    value={jam.title}
                                />
                                
                            </div>
                        </div>
                        <div class="item">
                            <p>Capacity</p>
                            <input type="number" name="capacity" min="1" max="100" />
                        </div>
                        <div class="item">
                            <p>Jam Address</p>
                            <input
                                type="text"
                                name="name"
                                placeholder="Street address"
                            />
                            <div class="city-item">
                                <input type="text" name="name" placeholder="City" />
                                <select name="region">
                                    <option value="">Region</option>
                                    <option value="1">North</option>
                                    <option value="2">Center</option>
                                    <option value="3">South</option>
                                </select>
                            </div>
                        </div>
                        <div class="item">
                            <p>Date</p>
                            <input type="date" name="date" />
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <div class="item">
                            <p>Time</p>
                            <input type="time" name="time" />
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="item">
                            <p>Description</p>
                            <textarea rows="3"></textarea>
                        </div>
                        
                       
                    </form>
                            <button className="form-submit-btn">
                                SAVE
                            </button>
                </div>
            
        );
    }
}
