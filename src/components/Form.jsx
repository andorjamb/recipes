import React, {useState, useEffect, useRef} from 'react';
import classes from './Form.module.css';


const Form = ({countries, submitHandler, resetHandler, newIngredient, newInstruction}) => {  


    const [ingredientRows, setIngredientRows] = useState();
    const ingredRow = useRef();
    const countriesList = countries;

    useEffect(()=>{
        console.log(countriesList);
    }, [])

/*     const newIngredient =()=>{
setIngredientRows()
    const row = `<input type="text" name="ingredient"/>
        <label>Quantity</label><input type="text" name="quantity"/>
        <label>Unit</label><input type="text" name="unit"/>`

    }
 
    const newInstruction =()=>{

    }*/

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
            <div><label htmlFor="description">Description</label><textarea maxLength={200} name="description" id="description"/></div>
           <div><label htmlFor="recipeImage"><button id="recipeImageLabel">
            <input type="file" accept="image/*" name="image" id="recipeImage"/>Upload image
            </button></label></div>
            
            <div><label htmlFor="ingredient" className={classes.ingredient}>Ingredient</label>
            <table><tr><td><input type="text" name="ingredient" id="ingredient" className={classes.ingredient} /></td></tr></table>
           </div>
            
<div><label className={classes.ingredient}>Quantity</label>
            <input type="text" name="quantity" id="quantity" className={classes.ingredient}/>
            <label className={classes.ingredient}>Unit</label><input type="text" name="unit" id="unit" className={classes.ingredient}/>
            </div>
            
            <button onClick={newIngredient}>Add more</button>
            <div> <label htmlFor="preparation_time">Preparation time</label>
            <input type="text" placeholder="time in minutes" name="preparation_time" id="preparation_time"/></div>
           
           <div>    <label>Instructions</label><textarea name="instructions" maxLength={200}/></div>
        
            <button onClick={newInstruction}>Add another step</button>
 <div><button type="submit" onClick={submitHandler}>Submit Recipe</button>
 <button type="reset" onClick={resetHandler}>Discard changes</button></div>
        </form></div>
       
    );
};

export default Form;

