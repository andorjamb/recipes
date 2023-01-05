import React from 'react';
import {Link} from 'react-router-dom';
import cooking from '../assets/video/Cooking.mp4';
import classes from './Home.module.css';

const Home = () => {
/* 
    function titleAnimation (){
        const title = ["T", "a","s","t","e","I","T"];
        for ()
        timer = setTimeout()
    } */
    return (
        <div className={classes.home}>
            <video autoPlay loop className={classes.video}><source src={cooking} type="video/mp4"/></video>
<div className={classes.title}><h1 className={classes.h1}>TasteIT</h1></div>
<div className={classes.menu}>
<div className={classes.glassCard}>
    <Link to="/recipes"><h3>Browse Recipes</h3></Link>
<p>Search for a recipe, or for recipes by country</p></div>
<div className={classes.glassCard}>
    <Link to="/addrecipe"><h3>Add your own recipe</h3></Link>
    <p>Add a recipe from your own country to our database</p></div>
<div className={classes.glassCard}>
    <a href="https://en.bc.fi/qualifications/full-stack-web-developer-program/"><h3>About HBC</h3></a>
<p>This project was completed as part of the Full Stack Developer Program at Helsinki Business College. Find out More!</p></div>
</div>

        </div>
    );
};

export default Home;