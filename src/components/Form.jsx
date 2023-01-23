import React, { useState, useRef } from 'react';

import './Form.css';

const Form = ({ countries, submitHandler, resetHandler, onChangeHandler, instructionHandler, ingredientsState, setIngredientsState }) => {

    const [ingNumber, setIngNumber] = useState([0]);
    const [insNumber, setInsNumber] = useState([0]);

    const more = useRef();
    const step = useRef();

    const nameInput = useRef();
    const quantityInput = useRef();
    const unitInput = useRef();

    const instructionInput = useRef();

    const ingredientBlurHandler = (e, index) => {
        let ingreds = [...ingredientsState];
        ingreds[index][e.target.name] = e.target.value;
        setIngredientsState(ingreds);
    }

    const instructionChangeHandler = () => {
        let newIns = instructionInput.current.value;
        instructionHandler(newIns);
    }

    const ingredientRow = (e) => {
        e.preventDefault();
        if (nameInput.current.value === '' || quantityInput.current.value === '' || unitInput.current.value === '') {
            alert("Some fields are missing data");
            return null;
        }
        else {
            setIngNumber([...ingNumber, ingNumber.length]);
            let newRow = {
                name: '',
                quantity: 0,
                unit: '',

            };
            setIngredientsState([...ingredientsState, newRow])
        }
    }

    const newInstruction = (e) => {
        e.preventDefault();
        if (instructionInput.current.value === undefined || instructionInput.current.value === '') {
            return null;
        }
        else {

            setInsNumber([...insNumber, insNumber.length])
        }
    }

    return (
        <div className="formDiv">
            <form className="form" >
                <label htmlFor="name">Recipe Name</label>
                <input type="text" name="name" id="name" onChange={onChangeHandler} />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" onChange={onChangeHandler} />
                <label htmlFor="country">Country &#40;Select from list&#41;</label>
                <select name="country" onChange={onChangeHandler}>  <option value="choice" defaultValue={'Select a country'}>Select a country</option>
                    {countries.map((country) => {
                        return <option key={country.name} name={country.name} value={country.name}>{country.name}</option>
                    })}
                </select>

                <label htmlFor="description" className="textareaLabel">Description</label>

                <textarea maxLength={400} name="description" id="description" onChange={onChangeHandler} />

                <label htmlFor='image'>ImageURL</label>
                <input type="url" id='image' name='image' maxLength={200} onChange={onChangeHandler} />

                <legend>Ingredients</legend>

                {ingredientsState.map((item, index) =>
                    <fieldset className="flex" name="ingredients" key={index} onBlur={(e) => ingredientBlurHandler(e, index)}>
                        <div className="indexP"><p>{index + 1}</p></div>
                        <div>
                            <label htmlFor="name">Ingredient</label>
                            <input className="ingredient" type="text" name="name" id="name" ref={nameInput} />
                        </div>
                        <div><label htmlFor="quantity">Quantity </label>
                            <input type="number" name="quantity" id="quantity" ref={quantityInput} className="inputSmallarea" />
                        </div>
                        <div>
                            <label htmlFor="unit">Unit </label>
                            <input type="text" name="unit" id="unit" className="inputSmallarea" ref={unitInput} />
                        </div>

                    </fieldset>)}

                <div className='flex'><button type="button" name="more" ref={more} onClick={(e) => ingredientRow(e)}>Add more</button>
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
                        <input type="number" name="servings" id="servings" className="inputSmallarea" onChange={onChangeHandler}></input>
                    </div>
                </section>

                <div className="block">

                    <label htmlFor="instructions" className="textareaLabel">Instructions</label>

                    {insNumber.map((number, index) => (<div key={index} ><textarea className="instructionInput" id="instruction" name="directions" maxLength={300} onBlur={instructionChangeHandler} ref={instructionInput} />
                    </div>)
                    )}

                </div>
                <div className='flex'>
                    <button name="step" ref={step} onClick={(e) => newInstruction(e)}>Add another step</button>
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

