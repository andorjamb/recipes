import React, { useEffect } from 'react';
import {Link, useParams } from 'react-router-dom';
import Flag from './Flag';
import classes from './Card.module.css';

const Card = ({recipeImage, recipeName, recipeCountry, countries}) => {

/*   const countriesList = countries;

useEffect(()=>{

    const newList = countriesList.filter(country => country.name.toLowerCase() === recipeCountry.toLowerCase());
    console.log(newList[0]);

 },[])
 */
    
    return (
        <div className={classes.card} key={recipeName}>
         
            <div><img src={recipeImage} alt={recipeName} />  
            <Flag country={recipeCountry}/>
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