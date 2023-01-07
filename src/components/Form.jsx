import React, { useState, useEffect, useRef, Children } from 'react';
import './Form.css';
import FormIngredient from './FormIngredient';
import FormInstruction from './FormInstruction';


const Form = ({ countries, submitHandler, resetHandler, dataHandler }) => {

    const [ingNumber, setIngNumber] = useState([0]);
    const [insNumber, setInsNumber] = useState([0]);
    const [ingredientsState, setIngredientsState] = useState([]);

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

    const ingredientRow = (e) => {
        console.log(ingredientsState);
        e.preventDefault();
        let newIngObj = new IngredientObject(ingInput.current.value, quantityInput.current.value, unitInput.current.value);
        setIngredientsState(ingredientsState => [...ingredientsState, newIngObj]);
        setIngNumber([...ingNumber, ingNumber.length]);
    }

    const newInstruction = (e) => {
        e.preventDefault();
        setInsNumber([...insNumber, insNumber.length]);
    }

    return (
        <div className="formDiv">
            <form className="form" onChange={dataHandler}>
                <label htmlFor="name">Recipe Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" />
                <label htmlFor="country">Country &#40;Select from list&#41;</label>
                <select name="country">  <option value="choice" defaultValue={'Select a country'}>Select a country</option>
                    {countries.map((country) => {
                        return <option key={country.name} name={country.name} value={country.name}>{country.name}</option>
                    })}
                </select>
                <label htmlFor="description" className="textareaLabel">Description</label><textarea maxLength={400} name="description" id="description" />

                <label>imageURL</label><input type="url" maxLength={200} />

                <div ref={ingredients}>
                    {ingNumber.map((i) => <FormIngredient key={i} ref1={ingInput} ref2={quantityInput} ref3={unitInput} />)}
                </div>

                <div><button onClick={(e) => ingredientRow(e)}>Add more</button></div>
                <div className='flex'>
                    <label htmlFor="preparation_time">Preparation time</label>
                    <input type="text" placeholder="minutes" name="preparation_time" id="preparation_time" className="inputSmallarea" />
                    <label htmlFor="cooking_time">Cooking time</label>
                    <input type="text" placeholder="minutes" name="cooking_time" id="cooking_time" className="inputSmallarea" /></div>

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

