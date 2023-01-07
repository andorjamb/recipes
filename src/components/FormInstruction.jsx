import React from 'react';
import './Form.css';

const FormInstruction = () => {
    return (
        <div ><label htmlFor="instructions" className="textareaLabelHidden">Instructions</label><textarea id="instructions" name="instructions" maxLength={300} />
        </div>
    );
};

export default FormInstruction;