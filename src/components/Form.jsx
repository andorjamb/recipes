import React from 'react';
import classes from './Form.module.css';


const Form = (props) => {  
    return (
        <form className={classes.form}>
            <label htmlFor="recipeName"></label><input type="text" name="recipeName " id="recipeName"></input>
            <label htmlFor="author"></label><input type="text" name="author" id="author"></input>
            <label htmlFor="country"></label><input type="select">
           
            {props.countries.map((country) => { return(
                <option key={country.name.common} value={country.name.common}>{country.name.common}</option>)
            })}
            </input>

        </form>
    );
};

export default Form;