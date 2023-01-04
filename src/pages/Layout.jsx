import React from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';

import classes from './Layout.module.css';

const Layout = () => {
    return (
        <div className={classes.layout}>
            <Header className={classes.header}/>
            <Main className={classes.main}/>
            <Footer className={classes.footer}/>

        </div>
    );
};

export default Layout;