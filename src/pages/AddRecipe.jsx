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
  const [ingredientsState, setIngredientsState] = useState([]); /**default value: empty array */
  const [directionsState, setDirectionsState] = useState([])

  const [newRecipe, setNewRecipe] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
    ingredients: [],/* array of objects */
    preparation_time: 0,
    cooking_time: 0,
    servings: 0,
    directions: {}, /* array of strings */

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
    setNewRecipe(dataAdapter(object));

    axios.post('http://localhost:3000/recipes', { ...newRecipe })
      .then(res => {
        console.log(res.data);
        setSuccess(true)
      })
      .catch((err) => {
        console.log(err);
        setSuccess(false);
        setPopup(true);
      });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setPopup(true);

  }

  const setFormData = (e) => { /**onChange event */
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
    console.log(newRecipe);


  }

  const ingredientHandler = (e) => { /**onBlur event */
    setNewRecipe({ ...newRecipe, ingredients: ingredientsState });

  }

  const instructionHandler = (e) => { /**onBlur event */
    setNewRecipe({ ...newRecipe, directions: directionsState });

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




  return (

    <div className={classes.addRecipe}>
      <h2>Add a New Recipe</h2>
      <Form countries={countries} submitHandler={submitForm} resetHandler={discardCheck} onChangeHandler={setFormData} {...newRecipe} instructionHandler={instructionHandler} ingredientHandler={ingredientHandler} /* newRowHandler1={} newRowHandler2={} */ setIngredientsState={setIngredientsState} ingredientsState={ingredientsState} directionsState={setDirectionsState} directions={directionsState} />
      {popup && success && <Popup closeHandler={closeHandler} />}
      {popup && !success && <FailPopup closeHandler={closeHandler} />}
      {discardPopup && <DiscardPopup yesHandler={discardChanges} noHandler={() => setDiscardPopup(false)} />}
    </div>
  );
};


export default AddRecipe;