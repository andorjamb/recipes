import React from 'react';
import classes from './Popup.module.css';

const DiscardPopup = ({yesHandler={}, noHandler={}}) => {
    return (
        <div className={classes.discard}>
            <p>Are you sure?</p>
            <button onClick={yesHandler}>Yes, discard recipe</button>
            <button onClick={noHandler}>No</button>
        </div>
    );
};

export default DiscardPopup;