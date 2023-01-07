import React, { useState } from 'react';
import Card from '../components/Card';
//import recipes from '../recipes.json';
import classes from './Recipes.module.css';

//const recipeData = recipes;

const Recipes = ({ countries, recipeData }) => {

    /*  const [recipes, setRecipes] = useState(recipeData.recipes); */
    const [recipes] = useState(recipeData);
    const [searchValue, setSearchValue] = useState('');
    const countriesList = countries;

    function searchFilter(e) {
        setSearchValue(e.target.value.toLowerCase());
    }

    const recipesFilter = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchValue) || recipe.country.toLowerCase().includes(searchValue));

    return (
        <>
            <div className={classes.search}><label htmlFor='searchValue'>Search recipes:</label>
                <input type="search" name='searchValue' id='searchValue' onChange={(e) => searchFilter(e)} placeholder="search by recipe or country" /></div>
            <div className={classes.recipes}>
                {recipesFilter.map((recipe) =>
                    <Card
                        recipeName={recipe.name}
                        recipeImage={recipe.image}
                        recipeCountry={recipe.country}

                        countries={countriesList} />)}

            </div>
        </>
    );
};

export default Recipes;