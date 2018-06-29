import React from 'react';

import './TextButton.css';

const TextButton = ({ buttonText, style, disabled, onClick }) => {

    return (
        disabled
            ? <button className='text-button-disabled' style={style}>
                {buttonText}
                <span className='dashed-border'></span>
            </button>
            : <button className='text-button' onClick={onClick} style={style}>
                {buttonText}
                <span className='dashed-border'></span>
            </button>
    );
};

export default TextButton;
