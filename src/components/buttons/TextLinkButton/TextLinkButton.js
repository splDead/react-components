import React from 'react';

import './TextLinkButton.css';

const TextLinkButton = ({ buttonText, style, onClick }) =>
    <button className={`text-link-button`} onClick={onClick} style={style}>
        {buttonText}
        <span className='dashed-border'></span>
    </button>;

export default TextLinkButton;
