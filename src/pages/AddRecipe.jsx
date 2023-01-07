import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Form from '../components/Form';
import Popup from '../components/Popup';
import DiscardPopup from '../components/DiscardPopup';
import classes from './AddRecipe.module.css';

const AddRecipe = ({ countries }) => {

  const [popup, setPopup] = useState(false);
  const [discardPopup, setDiscardPopup] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    "name": "",
    "author": "",
    "country": "",
    "description": "",
    "image": "",
    "ingredients": [],/* array of objects  - needs to be passed up from child*/
    "preparation_time": 0,
    "cooking_time": 0,
    "servings": 0,
    "directions": [], /* array of strings */
  })

  class newRecipe2 {
    constructor(name, author, country, description, image, ingredients, preparation_time, cooking_time, servings, directions) {
      this.name = name;
      this.author = author;
      this.country = country;
      this.description = description;
      this.image = image;
      this.ingredients = ingredients;
      this.preparation_time = preparation_time;
      this.cooking_time = cooking_time;
      this.servings = servings;
      this.directions = directions;
    }
  }


  const submitForm = (e) => {
    e.preventDefault();
    setPopup(true);
    saveNewRecipe();
  }

  const saveNewRecipe = async (e) => {

    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
    /* let formData = new FormData();
    formData = newRecipe; */

    console.log(newRecipe);

    /*   await axios.post('http://localhost:3000/recipes', { ...newRecipe })
        .then(res => { console.log(res.data) })
        .catch((err) => console.log(err));
  */
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
      <Form countries={countries} submitHandler={submitForm} resetHandler={discardCheck} dataHandler={saveNewRecipe} {...newRecipe} />
      {popup && <Popup closeHandler={closeHandler} />}
      {discardPopup && <DiscardPopup yesHandler={discardChanges} noHandler={() => setDiscardPopup()} />}
    </div>
  );
};


export default AddRecipe;