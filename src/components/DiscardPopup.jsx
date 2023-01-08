import React from 'react';
import './Popup.css';

const DiscardPopup = ({yesHandler, noHandler}) => {
    return (
        <div className='popup'>
            <p>Are you sure you want to discard this recipe without saving?</p>
            <p><button onClick={yesHandler}>Yes</button>
            <button onClick={noHandler}>No</button></p>
        </div>
    );
};

export default DiscardPopup;