import React, {useState, setState} from 'react';
import Card from '../components/Card';
import recipes from '../recipes.json';
import classes from './Recipes.module.css';

const recipeData = recipes;
const Recipes = () => {
    
const [recipes] = useState(recipeData.recipes);
    function search (){

    }
    return (
        <div className={classes.recipes}>
            <div>
            {recipes.map((recipe)=><Card recipeName={recipe.name} recipeImage={recipe.image}/>)}
            </div>
        </div>
    );
};

export default Recipes;