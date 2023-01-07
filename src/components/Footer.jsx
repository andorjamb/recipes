import React from 'react';
import classes from './Footer.module.css';
import githubLogo from '../assets/images/github-mark.png';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <p>Copyright Helsinki Business College 2022-2023</p>
            <a href="https://github.com/andorjamb/recipes"><img className="githubLogo" src={githubLogo} alt="github" /></a>
        </footer>
    );
};

export default Footer;