import React, {useState, setState, useEffect} from 'react';
import Card from '../components/Card';
import recipes from '../recipes.json';
import classes from './Recipes.module.css';

const recipeData = recipes;

const Recipes = ({countries}) => {
    
const [recipes] = useState(recipeData.recipes);
const [searchValue, setSearchValue] = useState('');
const countriesList = countries;

function searchFilter(e){
    setSearchValue(e.target.value.toLowerCase());
  }

/* useEffect(()=>{
    console.log(countriesList[0].flags);
    console.log(countriesList);
},[]) */

/* function flagFilter(recipe){
    countriesList.filter(country => country.name.toLowerCase() === recipe.country.toLowerCase());
    console.log(thisCountry[0]);
    //return thisCountry[0].flags.svg;
  } */


const recipesFilter = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchValue) || recipe.country.toLowerCase().includes(searchValue));
  
    return (
        <>
        <div className={classes.search}><label htmlFor='searchValue'>Search recipes:</label>
        <input type="search" name='searchValue' id='searchValue' onChange={(e)=>searchFilter(e)} placeholder="search by recipe or country"/></div>
        <div className={classes.recipes}>
            {recipesFilter.map((recipe)=>
            <Card 
            recipeName={recipe.name} 
            recipeImage={recipe.image} 
            recipeCountry={recipe.country}
            countries={countriesList}/>)}
          
        </div>
        </>
    );
};

export default Recipes;