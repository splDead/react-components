import React from 'react';

import './PrimaryButton.css';

const PrimaryButton = ({ buttonText, style, onClick }) =>
    <button className={`primary-button`} style={style} onClick={onClick}>
        {buttonText}
    </button>;

export default PrimaryButton;
