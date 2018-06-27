import React from 'react';

import './PrimaryButton.css';

class PrimaryButton extends React.Component {

    static defaultProps = {
        during: 1000,
        color: 'rgba(255, 255, 255, .3)',
        onClick: () => {}
    };

    constructor(props) {
        super(props);

        this.state = {
            rippleStyle: {
                position: 'absolute',
                borderRadius: '50%',
                opacity: 0,
                width: 35,
                height: 35,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                backgroundColor: props.color,
            },
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    handleClick = ev => {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }

        const { during } = this.props;
        const {
            pageX,
            pageY,
            currentTarget: { offsetLeft, offsetTop, offsetWidth, offsetHeight },
        } = ev;

        const left = pageX - offsetLeft;
        const top = pageY - offsetTop;
        const size = Math.max(offsetWidth, offsetHeight);

        this.setState({
            rippleStyle: {
                ...this.state.rippleStyle,
                top,
                left,
                opacity: 1,
                transform: 'translate(-50%, -50%)',
                transition: 'initial',
            },
        });

        this.timer = setTimeout(() => {
            this.setState({
                rippleStyle: {
                    ...this.state.rippleStyle,
                    opacity: 0,
                    transform: `scale(${size / 9})`,
                    transition: `all ${during}ms`,
                },
            })
        }, 0);
    };

    render() {

        const { buttonText } = this.props;

        return (
            <button className={`primary-button`} onClick={this.handleClick}>
                {buttonText}
                <s style={this.state.rippleStyle} />
            </button>
        )
    }
}

export default PrimaryButton;
