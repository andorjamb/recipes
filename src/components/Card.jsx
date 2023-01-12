import React from 'react';
import { Link } from 'react-router-dom';
import Flag from './Flag';
import classes from './Card.module.css';

const Card = ({ recipeImage, recipeName, recipeCountry, recipeId, countries }) => {



    const flagFilter = (recipeCountry) => { const thisCountry = countries.filter(country => recipeCountry === country.name); }

    console.log(countries);
    console.log(recipeCountry);
    console.log
    return thisCountry.flag;
}
return (
    <div className={classes.card} key={recipeName}>

        <div><img src={recipeImage} alt={recipeName} />
            {/*    <Flag country={recipeCountry} /> */}
            <Flag country={recipeCountry} flag={flagFilter} />
        </div>
        <div><h4>{recipeName}</h4>  </div>
        <div><Link to={`${recipeId}`}>
            <button className={classes.button}>See Recipe</button>
        </Link></div>


    </div>
);
};

export default Card;