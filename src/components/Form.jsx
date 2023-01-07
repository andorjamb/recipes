import React, { useState, useEffect, useRef, Children } from 'react';
import './Form.css';
import FormIngredient from './FormIngredient';
import FormInstruction from './FormInstruction';


const Form = ({ countries, submitHandler, resetHandler }) => {

    const [ingNumber, setIngNumber] = useState([0]);

    const ingredients = useRef();
    const instructions = useRef();

    const ingInput = useRef();
    const quantityInput = useRef();
    const unitInput = useRef();


    class IngredientObject {
        constructor(name, quantity, unit) {
            this.name = name;
            this.quantity = +quantity;
            this.unit = unit;
        }
    }

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

    const ingredientRow = (e) => {
        e.preventDefault();
        console.log(ingInput.current.value);
        console.log(quantityInput.current.value);
        console.log(unitInput.current.value);
        let newIngObj = new IngredientObject(ingInput.current.value, quantityInput.current.value, unitInput.current.value);
        console.log(newIngObj);
        setIngNumber([...ingNumber, ingNumber.length]);
        console.log('ingnumber:', ingNumber)

        // ingredientsNumber.current.push(ingredientsNumber.current.length);
    }

    const newInstruction = (e) => {
        e.preventDefault();
    }

    /*   const newRow = () => {
          for (let i = 0; i <= ingredients.current; i++) {
              ingredients.current.map((item) =>
                  <div><input type="text" name="ingredient" id="ingredient" className="ingredient" />
                      <input type="text" name="quantity" id="quantity" className="inputSmallarea" />
                      <input type="text" name="unit" id="unit" className="inputSmallarea" />
                  </div>)
  
          }
      } */

    return (
        <div className="formDiv">
            <form className="form">
                <label htmlFor="recipeName">Recipe Name</label>
                <input type="text" name="recipeName" id="recipeName" />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" />
                <label htmlFor="country">Country &#40;Select from list&#41;</label>
                <select>  <option value="choice" selected>Select a country</option>
                    {countries.map((country) => {
                        return <option key={country.name} name={country.name} value={country.name}>{country.name}</option>
                    })}
                </select>
                <label htmlFor="description" className="textareaLabel">Description</label><textarea maxLength={400} name="description" id="description" />

                {/*  TODO: add upload option
               <div><label htmlFor="recipeImage"><button id="recipeImageLabel">
                    <input type="file" accept="image/*" name="image" id="recipeImage" />Upload image
                </button></label></div> */}

                <label>imageURL</label><input type="url" maxLength={200} />

                <div ref={ingredients}>
                    {/*  <FormIngredient /> */}
                    {ingNumber.map((i) => <FormIngredient ref1={ingInput} ref2={quantityInput} ref3={unitInput} />)}

                </div>

                <div><button onClick={(e) => ingredientRow(e)}>Add more</button></div>

                <label htmlFor="preparation_time">Preparation time</label>
                <input type="text" placeholder="minutes" name="preparation_time" id="preparation_time" className="inputSmallarea" />

                <div ref={instructions}><label htmlFor="instructions" className="textareaLabel">Instructions</label><textarea id="instructions" name="instructions" maxLength={300} />
                </div>
                <FormInstruction ref1={ingInput} re2={quantityInput} ref3={unitInput} />


                <button onClick={(e) => newInstruction(e)}>Add another step</button>

                <div><button type="submit" onClick={submitHandler}>Submit Recipe</button>
                    <button type="reset" onClick={resetHandler}>Discard changes</button>
                </div>
            </form>
        </div>
    );
};

export default Form;

