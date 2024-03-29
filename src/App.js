import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Home from './pages/Home.jsx';
import Recipes from './pages/Recipes.jsx';
import NotFound from './pages/NotFound.jsx';
import RecipeSingle from './pages/RecipeSingle.jsx';
import AddRecipe from './pages/AddRecipe';
import Layout from './pages/Layout';

function App() {

  const [countries, setCountries] = useState([]);
  const [recipeData, setRecipeData] = useState([]);

  async function getCountryData() {
    await axios.get(' https://restcountries.com/v2/all?fields=name,flag')
      .then(res => { setCountries(res.data) });
  }

  async function getRecipeData() {
    await axios.get('http://localhost:3000/recipes')
      .then(res => { setRecipeData(res.data) })
      .catch((error) => alert(error));
  }
  useEffect(() => {

    getCountryData();
    getRecipeData();

  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/recipes' element={<Recipes RecipeSingle={recipeData} />}></Route>
            <Route path='/recipes/:recipesingle' element={<RecipeSingle recipeData={recipeData} />}></Route>
            <Route path='/addrecipe' element={<AddRecipe countries={countries} />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route></Routes> </BrowserRouter>

    </div>
  );
}

export default App;
