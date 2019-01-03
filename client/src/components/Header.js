import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            open: false
        });
    };

    render() {
        return (
            <div>Header</div>
        );
    }
}

export default Header;