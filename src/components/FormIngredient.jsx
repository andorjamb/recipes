import React from 'react';
import './Form.css';

const FormIngredient = ({ ref1, ref2, ref3, eventHandler }) => {
    return (
        <fieldset className="flex" name="ingredients">
            <div>
                <label htmlFor="name">Ingredient</label>
                <input className="ingredient" type="text" name="name" ref={ref1} onBlur={eventHandler} />
            </div>

            <div><label htmlFor="quantity">Quantity </label>
                <input type="number" name="quantity" id="quantity" className="inputSmallarea" ref={ref2} onChange={eventHandler} />
            </div>
            <div>
                <label htmlFor="unit">Unit </label>
                <input type="text" name="unit" id="unit" className="inputSmallarea" ref={ref3} onChange={eventHandler} />
            </div>
        </fieldset>

    );
};

export default FormIngredient;
