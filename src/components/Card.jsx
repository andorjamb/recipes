import React from 'react';
import {Link, useParams } from 'react-router-dom';
import classes from './Card.module.css';

const Card = ({recipeImage, recipeName, flag}) => {
    return (
        <div className={classes.card} key={recipeName}>
         
            <div><img src={recipeImage} alt={recipeName} />  
            <div className={classes.flag}><img src={flag} alt="flag"/></div>
            </div>
            <div><h4>{recipeName}</h4>
            <Link to={`${recipeName}`}>
                <button className={classes.button}>See Recipe</button>
            </Link>
            </div>
            
        </div>
    );
};

export default Card;