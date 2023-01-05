import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Form from '../components/Form';
import Popup from '../components/Popup';
import classes from './AddRecipe.module.css';

const AddRecipe = () => {

    const [countries, setCountries]  =useState([]);
    const [popup, setPopup] = useState(false);
    const [newRecipe, setNewRecipe ] = useState({
        "":,
    }

    );


 const submitForm = (e) => {
    e.preventDefault();
    setPopup(true);
    saveNewRecipe();
  }

    const saveNewRecipe= () => {
        axios.post('http://localhost:3000/src/db.json', {
          ...newRecipe
        })
          .catch((error) => console.log(error));
        setPopup(false);
        window.location.reload(true);
    
      }
    
      const discardRecipe= () => {
        setDiscardPopup(true);
        window.location.reload(true)

      }

    
    useEffect(()=>{
axios.get(' https://restcountries.com/v2/all?fields=name,flags')
.then(res=> {setCountries(res)})
    },[])


/*    
[ {-name.common
-flags.png
flags.svg
 - }] */



    return (
       
        <div className={classes.addRecipe}>
            <Form countries={countries} submitHandler={submitForm}/>
 {popup && <Popup /> } 
        </div>
    );
};

export default AddRecipe;