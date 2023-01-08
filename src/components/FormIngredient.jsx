import React from 'react';
import './Form.css';

const FormIngredient = ({ ref1, ref2, ref3, blurHandler }) => {
    return (
        <section className="flex">
            <div>
            <label htmlFor="name">Ingredient          </label>
                <input className="ingredient" type="text" name="ingredients" ref={ref1} onBlur={blurHandler} />
  </div>

            <div><label htmlFor="quantity">Quantity </label>
                <input type="text" name="ingredients" id="quantity" className="inputSmallarea" ref={ref2} onBlur={blurHandler} />
           </div>
<div>
            <label htmlFor="unit">Unit </label>
            <input type="text" name="unit" id="unit" className="inputSmallarea" ref={ref3} onBlur={blurHandler} />
          
</div>
        </section>
    );
};

export default FormIngredient;
