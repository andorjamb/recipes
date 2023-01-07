import React from 'react';
import './Form.css';

const FormIngredient = ({ ref1, ref2, ref3 }) => {
    return (
        <div className="ingredients"><label htmlFor="ingredient">Ingredient</label>
            <input type="text" name="ingredient" className="ingredient" ref={ref1} />
            <label>Quantity</label>
            <input type="text" name="quantity" id="quantity" className="inputSmallarea" ref={ref2} />
            <label className="ingredient">Unit</label><input type="text" name="unit" id="unit" className="inputSmallarea" ref={ref3} />
        </div>
    );
};

export default FormIngredient;
