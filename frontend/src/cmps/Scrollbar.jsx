import { Scrollbars } from 'react-custom-scrollbars';
import React, { Component } from 'react';

export  class CustomScrollbars extends Component {
    render() {
        return (
            <Scrollbars
                style={{ height: 300 }}>

            </Scrollbars>
        );
    }
}