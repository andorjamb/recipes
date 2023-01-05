import React from 'react';
import './Popup.css';

const Popup = ({closeHandler}) => {
    return (
        <div className='popup'>
            <p>Thankyou for submitting your recipe! </p>
            <button onClick={closeHandler}>Close</button>
        </div>
    );
};

export default Popup;