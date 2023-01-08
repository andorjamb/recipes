import React from 'react';
import './Form.css';

const FormInstruction = ({ i, /* instructionChangeHandler, */ ref4 }) => {
    return (
        <div><textarea className="directionInput" id="directions" name="directions" maxLength={300} key={i} /* onBlur={instructionChangeHandler} */ ref={ref4} />
        </div>
    );
};

export default FormInstruction;