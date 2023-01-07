import React, { useState, useEffect } from 'react';
import classes from './Flag.module.css';
import axios from 'axios';

const Flag = ({ country }) => {

    const [flagImage, setFlagImage] = useState();

    useEffect(() => {
        axios.get(`https://restcountries.com/v2/name/${country}?fields=flag`)
            .then((res) => setFlagImage(res.data[0].flag))

    }, []);

    return (
        <div className={classes.flag}>
            {flagImage ? <img src={flagImage} key={country} alt="flag" /> : null}
        </div>
    );
};

export default Flag;
