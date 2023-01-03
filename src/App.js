import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Recipes from './pages/Recipes.jsx';
import NotFound from './pages/NotFound.jsx';
import RecipeSingle from './pages/RecipeSingle.jsx';
import AddRecipe from './pages/AddRecipe';

function App() {
  const params = useParams();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/recipes' element={<Recipes />}></Route>
          <Route path='/recipes/:recipesingle' element={<RecipeSingle />}></Route>
          <Route path='/addrecipe' element={<AddRecipe />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes></BrowserRouter>

    </div>
  );
}

export default App;
