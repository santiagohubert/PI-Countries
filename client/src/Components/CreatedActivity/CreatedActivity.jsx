import React from 'react'
import './createdActivity.css';
import { Link, useHistory } from 'react-router-dom';
import { getCountries, postActivity } from '../../redux/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// function validate(input) {
//   let errors = {};
//   if(!input.name || input.name.length < 3 || !input.name.match( (/^[A-Za-z]+$/))) {
//       errors.name =  'Se requiere que ingrese un nombre para la actividad';
//   } else if (!input.difficulty) {
//       errors.difficulty = 'Se requiere que ingrese una dificultad para la actividad';
//   } else if (!input.duration) {
//       errors.duration = 'Se requiere que ingrese una duración para la actividad'
//   } else if (!input.season) {
//       errors.season = 'Se requiere que ingrese una estación para la actividad';
//   } else if (!input.country) {
//       errors.country = 'Se requiere que ingrese un pais para la actividad'
//   }
//   return errors;
// }

export default function CreatedActivity(){
  const dispatch = useDispatch()
  const history = useHistory()
  const countries = useSelector(state => state.countries)
  const [errors, setErrors] = useState({})
  const [input,setInput] = useState({
    name: "",
    difficulty:"",
    duration:"",
    season:"",
    countries:[]
  })
  
  useEffect(() => {
    dispatch(getCountries());
  },[])

  return (
    <div className='form-contain'>
      <div className='btn-volver'><Link to='/home'>  <button> Volver </button></Link></div>

      <div className='crear-titulo'>
      <h1 className='crear-titulo'> Recomendá tu actividad </h1>
      </div>
      <div className='crear-sugerencia'>
        <h2 className='crear-sugerencia'> 
      Compartí tu experiencia y ayuda a otros turistas a planificar su viaje
        </h2>
      </div>
      <div className='formulario'>
    <form>
      <div>
        <label>Nombre: </label>
        <input
          type= "text"
          value= {input.name}
          name= "name"

        />
      </div>
      <div>
        <label>Dificultad: </label>
        <input
          type= "text"
          value= {input.difficulty}
          name= "difficulty"

        />
      </div>
      <div>
        <label>Duración: </label>
        <input
          type= "text"
          value= {input.duration}
          name= "duration"

        />
      </div>

      <div>
        <label>Estación: </label>
        <input
          type= "text"
          value= {input.season}
          name= "season"
        
        />
      </div>
      <div>
      <label>Pais: </label>
        <input
          type= "text"
          value= {input.countries}
          name= "countries"
        />
      </div>
    </form>
    </div>
    </div>
  )
}
