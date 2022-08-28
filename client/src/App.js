import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import './App.css';
import { Detail } from './Components/Detail/Detail';
import CreatedActivity from './Components/CreatedActivity/CreatedActivity';



function App() {
  return (
    <BrowserRouter>
    <div>
    
      <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/home/:id' element={Detail}/>
        <Route exact path='/form' component={CreatedActivity}/>

    </div>
    </BrowserRouter>
  );
}

export default App;
