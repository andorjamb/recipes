import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './Main.module.css';

const Main = () => {


    const title = ["T", "a","s","t","e","I","T"]
    return (
        <div className={classes.main}>
            <Outlet />
        </div>
    );
};

export default Main;