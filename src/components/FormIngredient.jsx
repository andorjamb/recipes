import React from 'react';
import './Form.css';

const FormIngredient = ({ ref1, ref2, ref3, blurHandler }) => {
    return (
        <div className="flex">
            <label htmlFor="name">Ingredient
                <input className="ingredient" type="text" name="ingredients" ref={ref1} onBlur={blurHandler} />
            </label>

            <label htmlFor="quantity">Quantity
                <input type="text" name="ingredients" id="quantity" className="inputSmallarea" ref={ref2} onBlur={blurHandler} />
            </label>

            <label>Unit<input type="text" name="unit" id="unit" className="inputSmallarea" ref={ref3} onBlur={blurHandler} />
            </label>


        </div>
    );
};

export default FormIngredient;
