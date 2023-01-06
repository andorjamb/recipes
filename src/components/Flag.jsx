import React, {useState, useEffect} from 'react';
import classes from './Flag.module.css';
import axios from 'axios';

const Flag = ({country}) => {

 
    const [flags, setFlags] = useState();   
    const [flagImage, setFlagImage] = useState();
    useEffect(()=>{
        axios.get(`https://restcountries.com/v2/name/${country}?fields=flags`)
        .then((res)=>setFlags(res.data));
    },[])

    useEffect(()=>{
        console.log(flags);
        /* setFlagImage(flags.flags.svg); */
    },[flags])

    return (
        <div className={classes.flag}>
            {setFlags ? <img src={flagImage} alt="flag"/> : null}
        </div>
    );
};

export default Flag;

/* {console.log(res.data)}).then((data) */