import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountries } from '../../redux/actions';
import './searchBar.css'


function SearchBar ({setCurrentPage}){
    const dispatch = useDispatch();
    const [ name, setName ] = useState('')

    function handleInputChange(e){
      e.preventDefault();
      setName(e.target.value)
    }

    function handleSubmit(e){
      e.preventDefault();
      if(name.length > 0){
        dispatch(getNameCountries(name))
        setName('')
        setCurrentPage(1)
      }else{
        alert('País no encontrado!')
      }
      }


  return (
    <div className='topnav'>
        <input 
        type='text' 
        placeholder='ej. Perú'
        onChange={(e) => handleInputChange(e)}
        value = {name}
        />
        <button id='search-button' type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
    </div>
  )
}


export default SearchBar