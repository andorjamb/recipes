import React from 'react';
import classes from './Form.module.css';


const Form = ({countries, submitHandler}) => {  
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
            <label htmlFor="description">Description</label><input type="textarea" name="description"/>
            <label htmlFor="recipeImage">Upload image</label><input type="file" accept="image/*" name="image"/>
            <label>Ingredients</label><input />
            <label>Quantity</label>
            <label>Unit</label>
            <button>Add another ingredient</button>
            <label>Instructions</label><input type="textarea" />
            <button>Add another step</button>

        </form>
    );
};

export default Form;

<div className="form">
<form onChange={eventHandler}>
    <label htmlFor="firstname">Firstname</label>
    <input name="firstname" type="text" maxLength={50} id="firstname"></input><br />
    <label htmlFor="lastname">Lastname</label>
    <input name="lastname" type="text" maxLength={50} id="lastname"></input><br />
    <label htmlFor="phone">Phone number</label>
    <input type="tel" name="phone" maxLength={14} id="phone"></input><br />
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" maxLength={200}></textarea><br />
    <label htmlFor="role">Role</label>
    <select name="role" id="role" selected="selected">
        <option value="choice" disabled>Select a role</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
        <option value="Other">Other</option>
    </select>
</form>
<button type="submit" onClick={submitHandler}>Submit Message</button>
</div>