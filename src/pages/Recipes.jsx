import React, {useState, setState, useEffect} from 'react';
import Card from '../components/Card';
import recipes from '../recipes.json';
import classes from './Recipes.module.css';
//import axios from 'axios';

const recipeData = recipes;

const Recipes = ({countries}) => {
    
const [recipes] = useState(recipeData.recipes);
const [searchValue, setSearchValue] = useState('');
/* const [countries, setCountries] = useState([]); */

function searchFilter(e){
    setSearchValue(e.target.value.toLowerCase());
  }
/* 
function flagFilter(country){
    const thisCountry = countries.filter(country => country.name.toLowerCase() === country.toLowerCase());
    console.log(thisCountry);
    return thisCountry[0].flags.svg;
  }
 */

const recipesFilter = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchValue) || recipe.country.toLowerCase().includes(searchValue));

/* 
useEffect(()=>{
    axios.get(' https://restcountries.com/v2/all?fields=name,flags')
    .then(res=> {setCountries(res.data)});
    
    console.log(countries);
        },[]) */
  
    return (
        <>
        <div className={classes.search}><label htmlFor='searchValue'>Search recipes:</label>
        <input type="search" name='searchValue' id='searchValue' onChange={(e)=>searchFilter(e)} placeholder="search by recipe or country"/></div>
        <div className={classes.recipes}>
            {recipesFilter.map((recipe)=>
            <Card 
            recipeName={recipe.name} 
            recipeImage={recipe.image} 
            flag={recipe.country}/>)}
          
        </div>
        </>
    );
};

export default Recipes;