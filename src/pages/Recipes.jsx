import React, { useState } from 'react';
import Card from '../components/Card';
import classes from './Recipes.module.css';

const Recipes = ({ recipeData }) => {

    const [recipes] = useState(recipeData);
    const [searchValue, setSearchValue] = useState('');


    function searchFilter(e) {
        setSearchValue(e.target.value.toLowerCase());
    }

    const recipesFilter = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchValue) || recipe.country.toLowerCase().includes(searchValue));

    return (
        <><div className={classes.flexContainer}>
            <h2>Recipes</h2>
            <div className={classes.search}>
                <div><label htmlFor='searchValue'></label>
                    <input type="search" name='searchValue' id='searchValue' onChange={
                        (e) => searchFilter(e)} placeholder="search by recipe or country" /></div>
            </div></div>

            <div className={classes.recipes}>
                {recipesFilter.map((recipe, i) =>
                    <Card
                        key={i}
                        recipeName={recipe.name}
                        recipeId={recipe.id}
                        recipeImage={recipe.image}
                        recipeCountry={recipe.country}
                    />)}

            </div>
        </>
    );
};

export default Recipes;