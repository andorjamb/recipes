import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Form from '../components/Form';
import Popup from '../components/Popup';
import DiscardPopup from '../components/DiscardPopup';
import classes from './AddRecipe.module.css';

const AddRecipe = () => {

    const [countries, setCountries]  =useState([]);
    const [popup, setPopup] = useState(false);
    const [discardPopup, setDiscardPopup] = useState([false]);
    const [newRecipe, setNewRecipe ] = useState({    
    "name": "",
      "author": "",
      "country": "",
      "description": "",
      "image": "",
      "ingredients": [],/* array of objects */
      "preparation_time": 0,
      "cooking_time": 0,
      "servings": 0,
      "directions": [], /* array of strings */
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
    
      const discardCheck= () => {
        setDiscardPopup(false);
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