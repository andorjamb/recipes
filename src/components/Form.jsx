import React, { useState, useRef } from 'react';
import './Form.css';
import FormIngredient from './FormIngredient';
import FormInstruction from './FormInstruction';


const Form = ({ countries, submitHandler, resetHandler, onChangeHandler, ingredientHandler, instructionHandler, setIngredientsState, ingredientsState, directionsState }) => {

    const [ingNumber, setIngNumber] = useState([0]);
    const [insNumber, setInsNumber] = useState([0]);

    const nameInput = useRef();
    const quantityInput = useRef();
    const unitInput = useRef();

    const instructionInput = useRef();

    class IngredientObject {
        constructor(name, quantity, unit) {
            this.name = name;
            this.quantity = +quantity;
            this.unit = unit;
        }
    }

    const ingredientRow = (e) => {
        e.preventDefault();
        if (nameInput.current.value === '' || quantityInput.current.value === '' || unitInput.current.value === '') { return null; }
        else {
            let newIngObj = new IngredientObject(nameInput.current.value, quantityInput.current.value, unitInput.current.value);

            setIngredientsState([...ingredientsState, newIngObj]);
            ingredientHandler(newIngObj);
            if (e.target.name === "more") { setIngNumber([...ingNumber, ingNumber.length]) }
        }
    }

    const newInstruction = (e) => {
        e.preventDefault();
        if (instructionInput.current.value === undefined || instructionInput.current.value === '') { return null; }
        else {
            let newIns = instructionInput.current.value;
            instructionHandler(newIns);
            if (e.target.name === "step") { setInsNumber([...insNumber, insNumber.length]) }
        }
    }


    return (
        <div className="formDiv">
            <form className="form" >
                <label htmlFor="name">Recipe Name</label>
                <input type="text" name="name" id="name" onBlur={onChangeHandler} />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" onBlur={onChangeHandler} />
                <label htmlFor="country">Country &#40;Select from list&#41;</label>
                <select name="country" onChange={onChangeHandler}>  <option value="choice" defaultValue={'Select a country'}>Select a country</option>
                    {countries.map((country) => {
                        return <option key={country.name} name={country.name} value={country.name}>{country.name}</option>
                    })}
                </select>

                <label htmlFor="description" className="textareaLabel">Description</label>

                <textarea maxLength={400} name="description" id="description" onChange={onChangeHandler} />

                <label htmlFor='image'>ImageURL</label>
                <input type="url" id='image' name='image' maxLength={200} onBlur={onChangeHandler} />


                <label htmlFor="ingredients"><h4>Ingredients</h4></label>

                {ingNumber.map((i) => <FormIngredient key={i} ref1={nameInput} ref2={quantityInput} ref3={unitInput} blurHandler={ingredientHandler} />)}

                <div className='flex'><button name="more" onClick={(e) => ingredientRow(e)}>Add more</button>
                    <p>Or</p>
                    <button onClick={(e) => ingredientRow(e)}>Done</button>
                </div>

                <section className='flex'>
                    <div>
                        <label htmlFor="preparation_time">Preparation time</label>
                        <input type="number" placeholder="minutes" name="preparation_time" id="preparation_time" className="inputSmallarea" onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="cooking_time">Cooking time </label>
                        <input type="number" placeholder="minutes" name="cooking_time" id="cooking_time" className="inputSmallarea" onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="servings">Servings</label>
                        <input type="number" name="servings" id="servings" onChange={onChangeHandler} className="inputSmallarea"></input>
                    </div>
                </section>

                <div className="block">
                    <label htmlFor="instructions" className="textareaLabel">Instructions</label>
                    {insNumber.map((i) => <FormInstruction key={i} ref4={instructionInput} />)}
                </div>
                <div className='flex'>
                    <button name="step" onClick={(e) => newInstruction(e)}>Add another step</button>
                    <p>Or</p>
                    <button onClick={(e) => newInstruction(e)}>Done</button>
                </div>
                <div className='flex'>
                    <button type="submit" onClick={submitHandler}>Submit Recipe</button>
                    <button type="reset" onClick={resetHandler}>Discard changes</button>
                </div>
            </form>
        </div>
    );
};

export default Form;

