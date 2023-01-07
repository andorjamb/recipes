import React, { useState, useEffect, useRef, Children } from 'react';
import classes from './Form.module.css';


const Form = ({ countries, submitHandler, resetHandler, newInstruction }) => {

    const countriesList = countries;
    const ingredients = useRef(null);
    const instructions = useRef(null);




    /*  useEffect(() => {
         console.log(countriesList);
     }, []) */

    const ingredientRow = (e) => {
        e.preventDefault();
        const row = `<input type="text" name="ingredient"/>
            <label>Quantity</label><input type="text" name="quantity"/>
            <label>Unit</label><input type="text" name="unit"/>`;
        return ({ Children }, { row })
    }



    return (
        <div className={classes.formDiv}>
            <form className={classes.form}>
                <label htmlFor="recipeName">Recipe Name</label>
                <input type="text" name="recipeName" id="recipeName" />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" />
                <label htmlFor="country">Country &#40;Select from list&#41;</label>
                <select>  <option value="choice" disabled>Select a country</option>
                    {countries.map((country, index) => {
                        return <option key={country.name} name={country.name} value={country.name}>{country.name}</option>
                    })}
                </select>
                <label htmlFor="description" className={classes.textareaLabel}>Description</label><textarea maxLength={400} name="description" id="description" />

                {/*  TODO: add upload option
               <div><label htmlFor="recipeImage"><button id="recipeImageLabel">
                    <input type="file" accept="image/*" name="image" id="recipeImage" />Upload image
                </button></label></div> */}

                <label>imageURL</label><input type="url" maxLength={200} />

                <div ref={ingredients} className={classes.ingredients}>
                    <label htmlFor="ingredient">Ingredient</label>
                    <input type="text" name="ingredient" id="ingredient" className={classes.ingredient} />
                    <label>Quantity</label>
                    <input type="text" name="quantity" id="quantity" className={classes.inputSmallarea} />
                    <label className={classes.ingredient}>Unit</label><input type="text" name="unit" id="unit" className={classes.inputSmallarea} />
                </div>

                <div><button onClick={(e) => ingredientRow(e)}>Add more</button></div>

                <label htmlFor="preparation_time">Preparation time</label>
                <input type="text" placeholder="minutes" name="preparation_time" id="preparation_time" className={classes.inputSmallarea} />

                <div ref={instructions}><label htmlFor="instructions" className={classes.textareaLabel}>Instructions</label><textarea id="instructions" name="instructions" maxLength={300} />
                </div>

                <button onClick={newInstruction}>Add another step</button>

                <div><button type="submit" onClick={submitHandler}>Submit Recipe</button>
                    <button type="reset" onClick={resetHandler}>Discard changes</button>
                </div>
            </form>
        </div>
    );
};

export default Form;

