import React from 'react';
import './Popup.css';

const Popup = ({ closeHandler }) => {
    return (
        <div className='overlay'>
            <div className='popup'>
                <p>Thankyou for submitting your recipe! </p>
                <p><button onClick={closeHandler}>Close</button></p>
            </div></div>
    );
};

export default Popup;