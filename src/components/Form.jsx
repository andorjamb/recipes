import React, { useState, useRef } from 'react';
import './Form.css';
import FormIngredient from './FormIngredient';
import FormInstruction from './FormInstruction';

const Form = ({ countries, submitHandler, resetHandler, onChangeHandler, instructionHandler, ingredientHandler, ingredientsState, directionsState }) => {

    const [ingNumber, setIngNumber] = useState([0]);
    const [insNumber, setInsNumber] = useState([0]);
    const [currentIngRow, setCurrentIngRow] = useState({
        name: '',
        quantity: 0,
        unit: '',
        key: 0
    });

    const more = useRef();
    const step = useRef();

    const nameInput = useRef();
    const quantityInput = useRef();
    const unitInput = useRef();

    const instructionInput = useRef();

    let postEventTarget = new EventTarget();
    postEventTarget.addEventListener('postMe', (e) => {
        ingredientHandler(e.detail);
    })

    let postEvent = new CustomEvent("postMe", { detail: currentIngRow });


    const ingredientEventHandler = (e) => {
        setCurrentIngRow({ ...currentIngRow, [e.target.name]: e.target.value });

    }

    const ingredientRow = (e) => {
        e.preventDefault();
        if (nameInput.current.value === '' || quantityInput.current.value === '' || unitInput.current.value === '') {
            alert("Some fields are missing data");
            return null;
        }
        else {
            if (e.target.name === "more") {
                setIngNumber([...ingNumber, ingNumber.length]);
                postEventTarget.dispatchEvent(postEvent);
            }
            else {
                postEventTarget.dispatchEvent(postEvent);
                e.target.disabled = true;
                more.current.disabled = true;

            }
        }
    }

    const newInstruction = (e) => {
        e.preventDefault();
        if (instructionInput.current.value === undefined || instructionInput.current.value === '') { return null; }
        else {
            let newIns = instructionInput.current.value;
            instructionHandler(newIns);
            if (e.target.name === "step") { setInsNumber([...insNumber, insNumber.length]) }
            else {
                e.target.disabled = true;
                step.current.disabled = true;
            }
        }
    }


    return (
        <div className="formDiv">
            <form className="form">
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

                <legend>Ingredients</legend>

                {ingNumber.map((i) => <FormIngredient key={i} ref1={nameInput} ref2={quantityInput} ref3={unitInput} eventHandler={(e) => ingredientEventHandler(e)} />)}

                <div className='squash'><button type="button" name="more" ref={more} onClick={(e) => ingredientRow(e)}>Add more</button>
                    <button type="button" onClick={(e) => ingredientRow(e)}>No more? Press Me!</button>
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
                <div className='squash'>
                    <button name="step" ref={step} onClick={(e) => newInstruction(e)}>Add another step</button>
                    <button onClick={(e) => newInstruction(e)}>No more? Press me!</button>

                </div>
                <div className='flex'>
                    <button type="submit" onClick={submitHandler}>Submit Recipe</button>
                    <button type="button" className="discard" onClick={resetHandler}>Discard changes</button>
                </div>
            </form>
        </div>
    );
};

export default Form;

