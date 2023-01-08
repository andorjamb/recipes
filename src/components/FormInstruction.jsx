import React from 'react';
import './Form.css';

const FormInstruction = ({ i, instructionChangeHandler }) => {
    return (
        <div><textarea id="directions" name="directions" maxLength={300} key={i} onChange={instructionChangeHandler} />
        </div>
    );
};

export default FormInstruction;