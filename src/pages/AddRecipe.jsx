/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
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
  const [ingredientsState, setIngredientsState] = useState([{
    name: '',
    quantity: 0,
    unit: ''
  }]);
  const [instructionState, setInstructionState] = useState([''])

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
    instructions: [], /* array of strings */
  })

  function dataAdapter(obj) {
    return Object.assign(obj, {
      preparation_time: +obj.preparation_time,
      cooking_time: +obj.cooking_time,
      servings: +obj.servings
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    let object = newRecipe;

    /** form validator */
    let recipeValues = Object.values(object);
    for (const i of recipeValues) {
      if (i === "") {
        alert('Incomplete form');
        return null;
      }
    }
    setNewRecipe(dataAdapter(object));

    axios.post('http://localhost:3000/recipes', { ...newRecipe })
      .then(
        setSuccess(true)
      )
      .catch((err) => {
        setSuccess(false);
        setPopup(true);
        alert(err);
      });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setPopup(true);

  }

  const handleFormData = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    setNewRecipe({ ...newRecipe, ingredients: ingredientsState });
  },
    // eslint-disable-next-line
    [ingredientsState]);

  useEffect(() => {
    setNewRecipe({ ...newRecipe, instructions: instructionState });
  }, // eslint-disable-next-line 
    [instructionState]);

  /** Button Handlers */

  const closeHandler = () => {
    setPopup(false);
    setDiscardPopup(false);
    window.location.reload(true);
  }

  const discardCheck = () => {
    setDiscardPopup(true);

  }

  const discardChanges = (e) => {
    e.preventDefault();
    setDiscardPopup(false);
    window.location.reload(true)
  }

  const keepChanges = (e) => {
    e.preventDefault();
    setDiscardPopup(false);
    return false;

  }

  return (

    <div className={classes.addRecipe}>
      <h2>Add a New Recipe</h2>
      <Form
        countries={countries}
        submitHandler={submitForm}
        resetHandler={discardCheck}
        onChangeHandler={handleFormData} {...newRecipe}
        ingredientsState={ingredientsState}
        setIngredientsState={setIngredientsState}
        instructionState={instructionState}
        setInstructionState={setInstructionState}
      />
      {popup && success && <Popup closeHandler={closeHandler} />}
      {popup && !success && <FailPopup closeHandler={closeHandler} />}
      {discardPopup && <DiscardPopup
        yesHandler={(e) => discardChanges(e)}
        noHandler={(e) => keepChanges(e)} />}
    </div>
  );
};

export default AddRecipe;