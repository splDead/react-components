import React from 'react';

import './TextLinkButton.css';

const TextLinkButton = ({ buttonText, style, disabled, onClick, classNames = '' }) => {

    return (
        disabled
            ? <button className={`text-link-button-disabled ${classNames}`} style={style}>
                {buttonText}
            </button>
            : <button className={`text-link-button ${classNames}`} onClick={onClick} style={style}>
                {buttonText}
                <span className='dashed-border'></span>
            </button>
    );
};

export default TextLinkButton;
