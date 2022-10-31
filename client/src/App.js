import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import './App.css';
import CreatedActivity from './Components/CreatedActivity/CreatedActivity';
import Detail from './Components/Detail/Detail';
import PrivacyPol from './Components/Footer/PrivacyPol';
import AboutMe from './Components/Footer/AboutMe';
import LegalWarning from './Components/Footer/LegalWarning';
import TermYCond from './Components/Footer/TermYCond';
// import ActivityCard from './Components/ActivityCreated/ActivityCard'



function App() {
  return (
    <BrowserRouter>
    <div>
    
      <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/home/:id' element={Detail}/>
        <Route exact path='/form' component={CreatedActivity}/>
        <Route exact path='/home/:id' render={({ match }) => <Detail id={match.params.id} />} />
        <Route exact path='/privacy' component={PrivacyPol}/>
        <Route exact path='/about' component={AboutMe}/>
        <Route exact path='/legal' component={LegalWarning}/>
        <Route exact path='/term' component={TermYCond}/>

    </div>
    </BrowserRouter>
  );
}

export default App;
