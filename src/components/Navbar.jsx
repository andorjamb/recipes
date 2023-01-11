import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    function modalMenu() {
        setMenu(!menu);
    }

    return (
        <nav className='nav'>
            <div className='title'><Link to="/">TasteIT</Link></div>
            <div className='menu'><span className='menuIcon' onClick={modalMenu}>menu</span></div>
            <div>
                <ul className={menu ? 'responsive' : null} >
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/recipes">Recipes</NavLink></li>
                    <li><NavLink to="/addrecipe">Add Recipe</NavLink></li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;