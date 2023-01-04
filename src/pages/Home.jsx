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
<div className={classes.menuCards}>
<div className={classes.glassCard}><Link to="/recipes"><h3>Browse Recipes</h3></Link><p>Search for a recipe, or for recipes by country</p></div>
<div className={classes.glassCard}><h3>Add your own recipe</h3></div>
<div className={classes.glassCard}><h3>About HBC</h3></div>
</div>

        </div>
    );
};

export default Home;