import React from 'react';

import './BasicHover.css';

class BasicHover extends React.Component {

    render() {

        const { disabled } = this.props;

        return (
            <div className={`${disabled ? 'basic-hover-effect-container-disabled' : 'basic-hover-effect-container'}`}>
                {this.props.children}
            </div>
        )
    }
}

export default BasicHover;
