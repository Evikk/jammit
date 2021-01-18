import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { JamPreview } from "./JamPreview";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: <ArrowBackIosIcon/>, className: "arrow-prev" });
const ArrowRight = Arrow({ text: <ArrowForwardIosIcon/>, className: "arrow-next" });

// const selected = "item1";

export class JamScroll extends Component {
    state = {
        menu: null,
        hideArrows: true,
        alignCenter: true,
        hideSingleArrow: true
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
        const { selected, menu, hideArrows, hideSingleArrow, alignCenter } = this.state;
        const { jams } = this.props;
        if (!jams) return <h2>Loading...</h2>
    
        return (
            <div>
                <ScrollMenu
                    hideArrows={true}
                    hideSingleArrow={true}
                    alignCenter={true}
                    arrowDisabledClass={'scroll-menu-arrow'}
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
