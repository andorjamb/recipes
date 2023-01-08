import React from 'react';
import './Form.css';

const FormIngredient = ({ ref1, ref2, ref3, ingredientChangeHandler }) => {
    return (
        <div className="flex">
            <div>   <label htmlFor="name">Ingredient
                <input type="text" name="ingredients" ref={ref1} onBlur={ingredientChangeHandler} /></label></div>
            <div>  <label htmlFor="quantity">Quantity
                <input type="text" name="ingredients" id="quantity" className="inputSmallarea" ref={ref2} onBlur={ingredientChangeHandler} /></label></div>
            <div>    <label>Unit<input type="text" name="unit" id="unit" className="inputSmallarea" ref={ref3} onBlur={ingredientChangeHandler} /></label></div>

        </div>
    );
};

export default FormIngredient;
