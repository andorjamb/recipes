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
  const [ingredientsState, setIngredientsState] = useState([]);
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
    directions: [], /* array of strings */
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

    /**form validator */
    let recipeValues = Object.values(object);
    for (const i of recipeValues) {
      if (i === "") {
        alert('Incomplete form');
        return null;
      }
    }
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

  const setFormData = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  }

  const ingredientHandler = (formData) => {
    /* setIngredientsState({ ...ingredientsState, formData });
    BALCONY */
  }

  const instructionHandler = (formData) => {
    setDirectionsState([...directionsState, formData]);
  }


  useEffect(() => {
    setNewRecipe({ ...newRecipe, ingredients: ingredientsState });
  },
    // eslint-disable-next-line
    [ingredientsState]);

  useEffect(() => {
    setNewRecipe({ ...newRecipe, directions: directionsState });
  }, // eslint-disable-next-line 
    [directionsState]);


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
        onChangeHandler={setFormData} {...newRecipe}
        instructionHandler={instructionHandler}
        ingredientHandler={ingredientHandler}
        setIngredientsState={setIngredientsState}
        ingredientsState={ingredientsState}
        directionsState={setDirectionsState}
        directions={directionsState} />
      {popup && success && <Popup closeHandler={closeHandler} />}
      {popup && !success && <FailPopup closeHandler={closeHandler} />}
      {discardPopup && <DiscardPopup yesHandler={(e) => discardChanges(e)} noHandler={(e) => keepChanges(e)} />}
    </div>
  );
};

export default AddRecipe;