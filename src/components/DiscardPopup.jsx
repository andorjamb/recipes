import React from 'react';
import './Popup.css';

const DiscardPopup = ({yesHandler, noHandler}) => {
    return (
        <div className='popup'>
            <p>Are you sure you want to discard this recipe without saving?</p>
            <button onClick={yesHandler}>Yes</button>
            <button onClick={noHandler}>No</button>
        </div>
    );
};

export default DiscardPopup;