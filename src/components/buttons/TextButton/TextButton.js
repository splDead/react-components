import React from 'react';

import './TextButton.css';

const TextButton = ({ buttonText, style, disabled, onClick, classNames = '' }) => {

    return (
        disabled
            ? <button className={`text-button-disabled ${classNames}`} style={style}>
                {buttonText}
                <span className='dashed-border'></span>
            </button>
            : <button className={`text-button ${classNames}`} onClick={onClick} style={style}>
                {buttonText}
                <span className='dashed-border'></span>
            </button>
    );
};

export default TextButton;
