import React from 'react';
import Card from '../components/Card';
import recipes from '../recipes.json';

import classes from './Recipes.module.css';

const Recipes = () => {
    return (
        <div className={classes.recipes}>
            <Card />
        </div>
    );
};

export default Recipes;