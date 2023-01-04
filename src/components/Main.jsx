import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './Main.module.css';

const Main = () => {
    return (
        <div className={classes.main}>
            <Outlet />
        </div>
    );
};

export default Main;