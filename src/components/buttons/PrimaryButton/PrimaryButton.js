import React from 'react';

import './PrimaryButton.css';

const PrimaryButton = ({ buttonText, style, disabled, onClick, classNames = '' }) => {

    return (
        disabled
            ? <button className={`primary-button-disabled ${classNames}`} style={style}>
                    {buttonText}
            </button>
            : <button className={`primary-button ${classNames}`} style={style} onClick={onClick}>
                {buttonText}
            </button>

    );
};

export default PrimaryButton;
