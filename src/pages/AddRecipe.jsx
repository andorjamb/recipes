import React, { useState } from 'react';
import axios from 'axios';

import Form from '../components/Form';
import Popup from '../components/Popup';
import DiscardPopup from '../components/DiscardPopup';
import FailPopup from '../components/FailPopup';
import classes from './AddRecipe.module.css';

const AddRecipe = ({ countries }) => {

  const [popup, setPopup] = useState(false);
  const [discardPopup, setDiscardPopup] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ingredientsState, setIngredientsState] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
    ingredients: "",/* array of objects  - needs to be passed up from child*/
    preparation_time: 0,
    cooking_time: 0,
    servings: 0,
    directions: "", /* array of strings */

  })



  function dataAdapter(obj) { /** mutates object */
    return Object.assign(obj, {
      preparation_time: +obj.preparation_time,
      cooking_time: +obj.cooking_time,
      servings: +obj.servings
    })

  }

  const submitForm = (e) => {
    e.preventDefault();
    let object = newRecipe;
    console.log(dataAdapter(object));
    setNewRecipe(dataAdapter(object));
    console.log(newRecipe);

    axios.post('http://localhost:3000/recipes', { ...newRecipe })
      .then(res => { console.log(res.data) })
      .catch((err) => {
        console.log(err);
        setSuccess(false);
        setPopup(true);
      });

    setPopup(true);

  }

  const setFormData = (e) => { /**onChange event */
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
    console.log(newRecipe);


  }

  const closeHandler = () => {
    setPopup(false);
    setDiscardPopup(false);
    window.location.reload(true);
  }

  const discardCheck = () => {
    console.log('discard');
    setDiscardPopup(true);
  }

  const discardChanges = () => {
    setDiscardPopup(false);
    window.location.reload(true)
  }

  const ingredientHandler = (e) => { /**onChange event */
    console.log('hearign you');
    setNewRecipe({ ...newRecipe, "ingredients": e.target.value }); //pass value to form from ingredient component
    console.log(newRecipe);

  }

  const instructionHandler = (e) => { /**onChange event */
    console.log('gog something');
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
    console.log(newRecipe);

  }


  return (

    <div className={classes.addRecipe}>
      <h2>Add a New Recipe</h2>
      <Form countries={countries} submitHandler={submitForm} resetHandler={discardCheck} onChangeHandler={setFormData} {...newRecipe} instructionHandler={instructionHandler} ingredientHandler={ingredientHandler} /* newRowHandler1={} newRowHandler2={} */ />
      {popup && success && <Popup closeHandler={closeHandler} />}
      {popup && !success && <FailPopup closeHandler={closeHandler} />}
      {discardPopup && <DiscardPopup yesHandler={discardChanges} noHandler={() => setDiscardPopup()} />}
    </div>
  );
};


export default AddRecipe;