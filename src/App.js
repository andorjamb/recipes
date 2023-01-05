import React, {useEffect, useState} from 'react';
import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Home from './pages/Home.jsx';
import Recipes from './pages/Recipes.jsx';
import NotFound from './pages/NotFound.jsx';
import RecipeSingle from './pages/RecipeSingle.jsx';
import AddRecipe from './pages/AddRecipe';
import Layout from './pages/Layout';

function App() {
  const params = useParams();
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    axios.get(' https://restcountries.com/v2/all?fields=name,flags')
    .then(res=> {setCountries(res.data)});
    
    console.log(countries);
        },[])
    
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/recipes' element={<Recipes countries={countries}/>}></Route>
            <Route path='/recipes/:recipesingle' element={<RecipeSingle />}></Route>
            <Route path='/addrecipe' element={<AddRecipe countries={countries}/>}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route></Routes></BrowserRouter>

    </div>
  );
}

export default App;
