import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetails, cleanDetails } from '../../redux/actions';
import { useEffect } from 'react';
import './detail.css';
import ActivityCard from '../ActivityCreated/ActivityCard';


export default function Details({id}){
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(getCountryDetails(id))
    console.log(id)
  },[dispatch])

  useEffect(() =>{
    return function(){
      dispatch(cleanDetails())
    }
  },[dispatch])

  const seasonToSpanish = (season) => {
    let translatedSeason = ""
    switch (season) {
      case "Summer":
        translatedSeason = "Verano"
        break;
      case "Winter":
        translatedSeason = "Invierno"
        break;
      case "Autumn":
        translatedSeason = "Otoño"
        break;
      case "Spring":
        translatedSeason = "Primavera"
        break;
    }
    return translatedSeason
  }

  const myCountry = useSelector ((state) => state.details)
  console.log(myCountry)
  if(myCountry.length === 0){
    return (
      <>
        <div className='detail-contain'>
        
        </div>
      </>
    )
  }else {
    return (
      <div className='detail-found'>
        {
          <div className='letras-detail'>
      
          <h1>Pais: {myCountry.name} ({myCountry.id})</h1>
          <h2>Continente: {myCountry? myCountry.subregion : myCountry.continents}</h2>
          <h2>Población: {myCountry.population} habitantes</h2>
          <h2>Capital: {myCountry.capital}</h2>
          <h2>Área: {myCountry.area} km2</h2>
          <h2>Subregión: {myCountry.subregion}</h2> 
          <h2></h2>

        </div>           
    }

   {myCountry.activities?.map((e) => 
    { return (
    <ActivityCard
      name={e.name}
      difficulty={e.difficulty}
      duration={e.duration}
      season={seasonToSpanish(e.season)}
      key={e.key}
   />)})} 
   <Link to ='/home'> 
          <button>Volver</button>
        </Link>
      </div>
  )
   }
  }
