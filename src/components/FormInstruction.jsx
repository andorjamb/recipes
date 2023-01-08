import React from 'react';
import './Form.css';

const FormInstruction = ({ i, instructionChangeHandler }) => {
    return (
        <div><textarea id="instructions" name="instructions" maxLength={300} key={i} onChange={instructionChangeHandler} />
        </div>
    );
};

export default FormInstruction;