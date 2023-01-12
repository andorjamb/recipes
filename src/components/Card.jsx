import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Flag from './Flag';
import classes from './Card.module.css';

const Card = ({ recipeImage, recipeName, recipeCountry, recipeId, countries }) => {

    const [flag, setFlag] = useState('');
    const [flagReady, setFlagReady] = useState(false);

    const flagFilter = (recipeCountry, countries) => {
        const thisCountry = countries.filter(country => country.name === recipeCountry);
        console.log(thisCountry);
        const flag = thisCountry[0].flag;
        console.log(flag);
        setFlag(flag);
        setFlagReady(true);
    }

    useEffect(() => {

        flagFilter(recipeCountry, countries);
        console.log(flag);
    },
        []);

    return (
        <div className={classes.card} key={recipeName}>

            <div><img src={recipeImage} alt={recipeName} />
                <Flag flag={flag} />
            </div>
            <div><h4>{recipeName}</h4>  </div>
            <div><Link to={`${recipeId}`}>
                <button className={classes.button}>See Recipe</button>
            </Link></div>


        </div>
    );
};

export default Card;