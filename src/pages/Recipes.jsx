import React, {useState, setState} from 'react';
import Card from '../components/Card';
import recipes from '../recipes.json';
import classes from './Recipes.module.css';

const recipeData = recipes;
const Recipes = () => {
    
const [recipes, setRecipes] = useState(recipeData.recipes);
const [searchValue, setSearchValue] = useState('');

function searchFilter(){


    }
    return (
        <>
        <div className={classes.search}><label htmlFor='searchValue'>Search recipes:</label><input type="text" name='searchValue' id='searchValue' /></div>
        <div className={classes.recipes}>
           
            {recipes.map((recipe)=><Card recipeName={recipe.name} recipeImage={recipe.image}/>)}
          
        </div>
        </>
    );
};

export default Recipes;