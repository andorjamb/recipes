import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './RecipeSingle.module.css';

const RecipeSingle = ({ recipeData }) => {
    const recipeId = useParams();
    const [recipes] = useState(recipeData);
    const [singleRecipe, setSingleRecipe] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const recipe = recipes.filter(recipe => recipe.id.toString() === recipeId.recipesingle);
        setSingleRecipe(recipe);
        setIsLoading(false);

    }, [recipeId.recipesingle, recipes])

    if (isLoading) {
        return <p className={classes.loading}>Loading ....</p>
    }
    else {
        return (
            <div className={classes.recipeSingle}>
                <h2>{singleRecipe[0].name}</h2>
                <p className={classes.slim}>By {singleRecipe[0].author}</p>
                <p className={classes.slim}>Origin: {singleRecipe[0].country} </p>
                <div className={classes.description}><h3>Description</h3>
                    <p>{singleRecipe[0].description}</p></div>
                <img src={singleRecipe[0].image} alt={singleRecipe[0].name} />
                <p>Preparation time: {singleRecipe[0].preparation_time} minutes</p>
                <p>Cooking time: {singleRecipe[0].cooking_time} minutes</p>
                <p>Servings: {singleRecipe[0].servings}</p>
                <h3>Ingredients</h3>
                <table className={classes.ingredients}><tbody>
                    {singleRecipe[0].ingredients.map((ingredient, i) => { return <tr key={i}><td>{ingredient.quantity}</td><td>{ingredient.unit}</td><td>{ingredient.name}</td></tr> })}
                </tbody></table>
                <h3>Directions</h3>
                <ol className={classes.directions}>
                    {singleRecipe[0].directions.map((direction, i) => { return <li key={i}>{direction}</li> })}

                </ol>
            </div>
        );
    }
};

export default RecipeSingle;