import React from 'react';
import './Form.css';

const FormIngredient = ({ ref1, ref2, ref3, ingredientChangeHandler }) => {
    return (
        <div className="flex">
            <label htmlFor="name">Ingredient</label>
            <input type="text" name="ingredients" className="ingredient" ref={ref1} onChange={ingredientChangeHandler} />
            <label htmlFor="quantity">Quantity</label>
            <input type="text" name="ingredients" id="quantity" className="inputSmallarea" ref={ref2} onChange={ingredientChangeHandler} />
            <label className="ingredient">Unit</label><input type="text" name="unit" id="unit" className="inputSmallarea" ref={ref3} onChange={ingredientChangeHandler} />
        </div>
    );
};

export default FormIngredient;
