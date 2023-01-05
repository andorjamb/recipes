import React from 'react';
import './Popup.css';

const DiscardPopup = ({yesHandler, noHandler}) => {
    return (
        <div className='popup'>
            <p>Are you sure?</p>
            <button onClick={yesHandler}>Yes, discard recipe</button>
            <button onClick={noHandler}>No</button>
        </div>
    );
};

export default DiscardPopup;