import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../recipes.json';
import classes from './RecipeSingle.module.css';
import axios from 'axios';

const recipesData = recipes;

const RecipeSingle = () => {
    const recipeName = useParams();
    const [recipes, setRecipes] = useState(recipesData.recipes);
    const [recipeData, setRecipeData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get('http://localhost:3000/recipes')
            .then(res => { setRecipes(res.data.recipes) })
            .catch((err) => console.log(err));
    }, []);



    useEffect(() => {
        setIsLoading(true);
        const recipe = recipes.filter(recipe => recipe.name === recipeName.recipesingle);
        setRecipeData(recipe);
        console.log(recipe);
        console.log(recipeName.recipesingle);
        console.log(recipeData);
        setIsLoading(false);


    }, [])

    if (isLoading) {
        return <p className={classes.loading}>Loading ....</p>
    }
    else {
        return (
            <div className={classes.recipeSingle}>
                <h2>{recipeData[0].name}</h2>
                <p>By {recipeData[0].author}</p>
                <p>Origin: {recipeData[0].country} </p>
                <div className={classes.description}><h3>Description</h3>
                    <p>{recipeData[0].description}</p></div>
                <img src={recipeData[0].image} alt="delicious meal" />
                <p>Preparation time: {recipeData[0].preparation_time} minutes</p>
                <p>Cooking time: {recipeData[0].cooking_time} minutes</p>
                <p>Servings: {recipeData[0].servings}</p>
                <h3>Ingredients</h3>
                <table className={classes.ingredients}>
                    {recipeData[0].ingredients.map((ingredient) => { return <tr><td>{ingredient.quantity}</td><td>{ingredient.unit}</td><td>{ingredient.name}</td></tr> })}
                </table>
                <h3>Directions</h3>
                <ol className={classes.directions}>
                    {recipeData[0].directions.map((direction) => { return <li>{direction}</li> })}

                </ol>
            </div>
        );
    }
};

export default RecipeSingle;