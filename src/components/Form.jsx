import React from 'react';
import classes from './Form.module.css';

const Form = () => {
    return (
        <form className={classes.form}>
            <label htmlFor="recipeName"></label><input type="text" name="recipeName " id="recipeName"></input>
            <label htmlFor="author"></label><input type="text" name="author" id="author"></input>

        </form>
    );
};

export default Form;