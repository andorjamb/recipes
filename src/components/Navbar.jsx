import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    function modalMenu() {
        setMenu(!menu);
    }

    return (
        <nav className={classes.nav}>
            <div className={classes.title}><Link to="/">TasteIT</Link></div>
            <div className={classes.menuIcon} onClick={modalMenu}>menu</div>
            <div id="menu">
                <ul className={menu ? 'classes.responsive' : ''} >
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/recipes">Recipes</NavLink></li>
                    <li><NavLink to="/addrecipe">Add Recipe</NavLink></li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;