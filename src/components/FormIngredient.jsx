import React from 'react';
import './Form.css';

const FormIngredient = ({ eventHandler, deleteHandler }) => {
    return (
        <fieldset className="flex" name="ingredients">
            <div>
                <label htmlFor="name">Ingredient</label>
                <input className="ingredient" type="text" name="name" onBlur={eventHandler} />
            </div>

            <div><label htmlFor="quantity">Quantity</label>
                <input type="number" min="0" name="quantity" id="quantity" className="inputSmallarea" onChange={eventHandler} />
            </div>
            <div>
                <label htmlFor="unit">Unit</label>
                <input type="text" name="unit" id="unit" className="inputSmallarea" onBlur={eventHandler} />
            </div>
            <div className="delete"><button type="button" onClick={deleteHandler}>X</button>     
            </div>
        </fieldset>

    );
};

export default FormIngredient;
