import React from 'react';

import './PrimaryButton.css';

const PrimaryButton = ({ buttonText, style, disabled, onClick }) => {

    return (
        disabled
            ? <button className='primary-button-disabled' style={style}>
                    {buttonText}
            </button>
            : <button className='primary-button' style={style} onClick={onClick}>
                {buttonText}
            </button>

    );
};

export default PrimaryButton;
