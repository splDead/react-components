import React from 'react';

import './TextLinkButton.css';

const TextLinkButton = ({ buttonText, style, disabled, onClick }) => {

    return (
        disabled
            ? <button className='text-link-button-disabled' style={style}>
                {buttonText}
                <span className='dashed-border'></span>
            </button>
            : <button className='text-link-button' onClick={onClick} style={style}>
                {buttonText}
                <span className='dashed-border'></span>
            </button>
    );
};

export default TextLinkButton;
