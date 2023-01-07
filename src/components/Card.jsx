import React from 'react';
import { Link } from 'react-router-dom';
import Flag from './Flag';
import classes from './Card.module.css';

const Card = ({ recipeImage, recipeName, recipeCountry, countries }) => {

    return (
        <div className={classes.card} key={recipeName}>

            <div><img src={recipeImage} alt={recipeName} />
                <Flag country={recipeCountry} />
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