import React from 'react';
import {Link, useParams } from 'react-router-dom';
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.card}>
            <img src={props.recipeImage} alt={props.recipeName} />
            <div><h4>{props.recipeName}</h4>
            <Link to='/recipes/:recipesingle' ><button>See Recipe</button></Link></div>
            
        </div>
    );
};

export default Card;