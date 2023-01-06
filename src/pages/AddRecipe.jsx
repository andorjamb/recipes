import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Form from '../components/Form';
import Popup from '../components/Popup';
import DiscardPopup from '../components/DiscardPopup';
import classes from './AddRecipe.module.css';

const AddRecipe = ({countries}) => {

    const [popup, setPopup] = useState(false);
    const [discardPopup, setDiscardPopup] = useState(false);
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

  const saveNewRecipe= async() => {

   let formData = new FormData();
    formData = newRecipe;

  await axios({
      method: "post",
      url:'http://localhost:3000/db.json',
      data: formData,
      headers:{ "Content-Type": "multipart/form-data" },
    })
    .then((res)=>{console.log(res);})
    .catch((error) => console.log(error));
  }

         
  const closeHandler =() =>{
          setPopup(false);
          setDiscardPopup(false);
        window.location.reload(true);
      }

  const discardCheck= () => {
    console.log('discard');
    setDiscardPopup(true);
      }

  const discardChanges = ()=>{
        setDiscardPopup(false);
         window.location.reload(true)
      }
  
  const addRow=()=>{}

  
    return (
       
        <div className={classes.addRecipe}>
          <h2>Add a New Recipe</h2>
            <Form countries={countries} submitHandler={submitForm} resetHandler={discardCheck} newIngredient={addRow} newInstruction={addRow}/>
 {popup && <Popup closeHandler={closeHandler}/> }
 {discardPopup && <DiscardPopup yesHandler={discardChanges} noHandler={()=>setDiscardPopup()}/>}
        </div>
    );
};

export default AddRecipe;