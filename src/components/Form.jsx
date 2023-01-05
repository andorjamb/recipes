import React from 'react';
import classes from './Form.module.css';


const Form = ({countries, submitHandler, newIngredient, newInstruction}) => {  
    return (
        <form className={classes.form}>
            <label htmlFor="recipeName">Recipe Name</label>
            <input type="text" name="recipeName " id="recipeName" />
            <label htmlFor="author">Author</label>
            <input type="text" name="author" id="author" />
            <label htmlFor="country">Country &#40;Select from list&#41;</label>
            <select>  <option value="choice" disabled>Select a country</option>
           
           {/*  {countries.map((country) => 
                <option key={country.name.common} name={country.name.common} value={country.name.common}>{country.name.common}</option>)
            } */}
            </select>
            <label htmlFor="description">Description</label><input type="textarea" maxLength={200} name="description"/>
            <label htmlFor="recipeImage">Upload image</label><input type="file" accept="image/*" name="image"/>
            <label>Ingredients</label><input />
            <label>Quantity</label>
            <label>Unit</label>
            <button onClick={newIngredient}>Add another ingredient</button>
            <label>Preparation time</label><input type="text" placeholder="time in minutes"/>
            <label>Instructions</label><input type="textarea" />
            <button onClick={newInstruction}>Add another step</button>
 <button type="submit" onClick={submitHandler}>Submit Recipe</button>
        </form>
       
    );
};

export default Form;

