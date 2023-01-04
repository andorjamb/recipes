import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.title}><Link to="/"><h4>TasteIT</h4></Link></div>
            <div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/recipes">Recipes</NavLink></li>
                    <li><NavLink to="/addrecipe">Add Recipe</NavLink></li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;