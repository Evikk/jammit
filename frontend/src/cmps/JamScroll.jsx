import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { JamPreview } from "./JamPreview";

const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

// const selected = "item1";

export class JamScroll extends Component {
    state = {
        menu: null
        // selected,
    };

    componentDidMount() {
        const menu = this.props.jams.map((jam) => {
                return <JamPreview key={jam._id} jam={jam} onJamClick={this.props.onJamClick} />;
        });
        this.setState({menu})
    }

    // onSelect = (key) => {
    //     this.setState({ selected: key });
    // };

    render() {
        const { selected, menu } = this.state;
        const { jams } = this.props;
        if (!jams) return <h2>Loading...</h2>
    
        return (
            <div>
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}
