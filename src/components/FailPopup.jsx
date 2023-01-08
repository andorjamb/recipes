import React from 'react';
import './Popup.css';

const FailPopup = ({ closeHandler }) => {
    return (
        <div className='overlay'>
            <div className='popup'>
                <p>For some reason that didn't work! Maybe your form was incomplete? Or try again later... </p>
                <button onClick={closeHandler}>Close</button>
            </div></div>
    );
};

export default FailPopup;